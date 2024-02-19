import { getContext } from "svelte";

const getAuthContext = () => getContext("key");

export { getAuthContext };
