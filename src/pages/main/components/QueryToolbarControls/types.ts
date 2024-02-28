import { Dispatch, SetStateAction } from 'react';

export interface QueryToolbarControlsProps {
  activeEditor: string;
  setActiveEditor: Dispatch<SetStateAction<string>>;
  changeEditorVisibility: () => void;
  isShowEditor: boolean;
}
