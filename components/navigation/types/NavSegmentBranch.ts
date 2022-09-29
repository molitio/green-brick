import { NavSegmentLeaf } from "./NavSegmentLeaf";
export type NavSegmentBranch = {
  path: string;
  label?: string;
  leafs?: Record<string, NavSegmentLeaf>;
};
