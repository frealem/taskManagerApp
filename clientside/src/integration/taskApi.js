import { apiSlice } from './apiSlice';
const USERS_URL = 'http://localhost:5002/api/tasks';

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTask: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/`,
        method: 'GET',
      }),
    }),
    getTask: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/${id}`,
        method: 'GET',
      }),
    }),
    addNewTask: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: 'POST',
        body: data,
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteTask: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllTaskMutation,
  useGetTaskMutation,
  useAddNewTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskApiSlice;