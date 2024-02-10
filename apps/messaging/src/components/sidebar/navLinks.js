import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
import TiGroupOutline from "svelte-icons/ti/TiGroupOutline.svelte";
import TiCogOutline from "svelte-icons/ti/TiCogOutline.svelte";
import TiBell from "svelte-icons/ti/TiBell.svelte";
import TiZoomOutline from "svelte-icons/ti/TiZoomOutline.svelte";
import FaShareAlt from "svelte-icons/fa/FaShareAlt.svelte";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: TiHomeOutline
  },
  {
    name: "Profile",
    href: "/profile",
    icon: TiGroupOutline
  },
  {
    name: "More",
    href: "/more",
    icon: TiCogOutline
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: TiBell
  },
  {
    name: "Discover",
    href: "/discoverer",
    icon: TiZoomOutline
  },
  {
    name: "Share your thoughts",
    href: "/thoughts",
    icon: FaShareAlt
  }
];

export default navLinks;
