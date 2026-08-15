import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"

export class AuthService {
    client = new Client();
    account;

    constructor()
    {
        this.client
            .setProject(conf.appWriteProjectId)
            .setEndpoint(conf.appWriteUrl);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name})
    {
        try {
            
           const userAccount = await this.account.create(ID.unique(),email,password,name)
           if(userAccount)
           {

           }
           else{
            
           }

        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService