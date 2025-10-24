import { BrowserRouter as Router} from "react-router-dom";
import { UserProvider } from "@/user.context";
import { CompanyProvider } from "@/company.context";
import { AppRouter } from "@/router";

export const AppContextRouter = () =>{

    return (<Router>
                <UserProvider>
                    <CompanyProvider>
                        <AppRouter />
                    </CompanyProvider>
                </UserProvider>
            </Router>);
}