import BasePage from "./BasePage";
import {credentials} from "../../Credentials";
import Header from "../components/Header";

export default class HomePage extends BasePage {
  public header: Header = new Header();

  constructor() {
    super(credentials);
  }
}
