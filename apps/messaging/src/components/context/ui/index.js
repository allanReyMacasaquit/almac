import { getContext } from "svelte";

const getUIContext = () => getContext("UIkey");

export { getUIContext };
