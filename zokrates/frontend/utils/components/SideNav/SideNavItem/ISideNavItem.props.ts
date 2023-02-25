import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

export interface ISideNavItemProps {
    text: string;
    children: JSX.Element,
    path: string;
    sx?: SxProps<Theme>;
    /** @dev To indicate the user that the page is not ready yet. */
    unavailable?: boolean;
}