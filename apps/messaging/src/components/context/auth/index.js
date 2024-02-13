import { getContext } from "svelte";

export const getAuthContext = () => getContext("key");
