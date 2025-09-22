import {ReactNode} from "react";
import Accountnavigation from "./navigation";  
export default function AccountLayout({ 
    children,
 }: { children: ReactNode }) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td valign="top" width="100px"><Accountnavigation /></td>
                        <td valign="top" width="100px">{children}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}