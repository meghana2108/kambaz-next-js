import { ReactNode } from "react";
import Kambaznavigation from "./navigation";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
       <table>
           <tbody>
               <tr>
                   <td valign="top" width="200"><Kambaznavigation /></td>
                   <td valign="top" width="100%">{children}</td>
               </tr>
           </tbody>
       </table>
    );
}
