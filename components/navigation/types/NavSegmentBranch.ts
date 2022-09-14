import { NavSegmentLeaf } from "./NavSegmentLeaf";
export type NavSegmentBranch = {
  name: string;
  path: string;
  leafs?: NavSegmentLeaf[];
};
