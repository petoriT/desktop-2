import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js
  //http://afrob.co.za

  // API url
  //public apiUrl = "http://afrob.co.za";
  public apiUrl = "https://cartalist.herokuapp.com";
  //public apiUrl = "http://localhost:3000";
  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() { }
}
