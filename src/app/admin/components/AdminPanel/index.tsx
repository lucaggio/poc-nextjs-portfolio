"use client";

import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/lib/api/projects.api";
import { ProjectT } from "@/types/project";
import { handleFetchError } from "@/utils/errors.utils";
import { ProjectFormT } from "./AdminPanel.types";

import * as S from "./AdminPanel.styles";

export function AdminPanel(): JSX.Element {
  const [projects, setProjects] = useState<ProjectT[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ProjectFormT>({
    defaultValues: { name: "", description: "", image: "" },
  });

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const data = await getProjects({ signal: controller.signal });
        setProjects(data);
      } catch (err) {
        handleFetchError(err, "adminPanel", "unmounted");
      }
    })();
    return () => controller.abort();
  }, []);

  const onSubmit = async (data: ProjectFormT) => {
    try {
      if (editingId) {
        const updated = await updateProject(editingId, data);
        setProjects((prev) =>
          prev.map((p) => (p.id === editingId ? updated : p))
        );
        setEditingId(null);
      } else {
        const newProject = await createProject(data);
        setProjects((prev) => [...prev, newProject]);
      }
      reset({ name: "", description: "", image: "" });
    } catch (err) {
      handleFetchError(err, "adminPanel");
    }
  };

  const handleEdit = useCallback(
    (project: ProjectT) => {
      setEditingId(project.id);
      reset({
        name: project.name,
        description: project.description,
        image: project.image,
      });
    },
    [reset]
  );

  const handleDelete = useCallback(async (id: string) => {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      handleFetchError(err, "adminPanel");
    }
  }, []);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => a.name.localeCompare(b.name));
  }, [projects]);

  const submitBtnText = isSubmitting
    ? "Saving..."
    : editingId
    ? "Update Project"
    : "Add Project";

  return (
    <S.Container>
      <h1>Admin Panel</h1>
      <S.Description>Manage your projects below.</S.Description>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          type="text"
          placeholder="Project name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <S.ErrorMsg>{errors.name.message}</S.ErrorMsg>}

        <S.Input
          type="text"
          placeholder="Project description"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <S.ErrorMsg>{errors.description.message}</S.ErrorMsg>
        )}

        <S.Input
          type="text"
          placeholder="Image url"
          {...register("image", { required: "Image url is required" })}
        />
        {errors.image && <S.ErrorMsg>{errors.image.message}</S.ErrorMsg>}

        <S.Button type="submit" disabled={isSubmitting}>
          {submitBtnText}
        </S.Button>

        {editingId && (
          <S.Button
            type="button"
            onClick={() => {
              setEditingId(null);
              reset({ name: "", description: "", image: "" });
            }}
            $bg="#888888"
          >
            Cancel
          </S.Button>
        )}
      </S.Form>

      <S.List>
        {sortedProjects.map((p) => (
          <S.Item key={p.id}>
            <div>
              <strong>{p.name}</strong>
              <p>{p.description}</p>
            </div>
            <S.Actions>
              <S.Button onClick={() => handleEdit(p)}>Edit</S.Button>
              <S.Button onClick={() => handleDelete(p.id)} $bg="#dc143c">
                Delete
              </S.Button>
            </S.Actions>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
}
