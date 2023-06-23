import create from "zustand";
import { persist } from "zustand/middleware";
import { IPokemon } from "../interfaces";

type State = {
  darkTheme: boolean;
  isAuth: boolean;
  search: string;
  token: string | null;
  openModal: boolean;
  pokemon: IPokemon | undefined;
};

type Actions = {
  setSearch: (search: string) => void;
  setToken: (token: string) => void;
  setOpenModal: (openModal: boolean) => void;
  setPokemon: (pokemon: IPokemon) => void;
  setDarkTheme: (openModal: boolean) => void;
  logout: () => void;
};

export const useStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      isAuth: false,
      darkTheme: false,
      openModal: false,
      pokemon: undefined,
      search: "",
      setToken: (token: string) =>
        set(() => ({
          token,
          isAuth: !!token,
        })),
      setOpenModal: (openModal: boolean) =>
        set(() => ({
          openModal: openModal,
        })),
      setSearch: (search: string) =>
        set(() => ({
          search: search,
        })),
      setPokemon: (pokemon: IPokemon) =>
        set(() => ({
          pokemon: pokemon,
        })),
      setDarkTheme: (darkTheme: boolean) =>
        set(() => ({
          darkTheme: darkTheme,
        })),
      logout: () => set(() => ({ token: null, isAuth: false })),
    }),
    {
      name: "auth",
    }
  )
);
