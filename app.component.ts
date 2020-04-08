/**
 * DropDownList Reactive Form Sample
 */
import { Component, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserLookup } from "./app/user-lookup";
import { UserLookupData } from "./app/user-lookup-data";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public autoreactiveskillset: string[] = [
    "ASP.NET",
    "ActionScript",
    "Basic",
    "C++",
    "C#",
    "dBase",
    "Delphi",
    "ESPOL",
    "F#",
    "FoxPro",
    "Java",
    "J#",
    "Lisp",
    "Logo",
    "PHP"
  ];
  public autoreactiveplaceholder: String = "Select book";
  skillForm: FormGroup;
  public userLookupData: UserLookup[] = UserLookupData;
  public userFields: Object = { text: "USER_DESC", value: "USER_ID" };
  public userRequired: boolean;
  public repType: number;
  public rolledUpChecked: boolean;
  public detailedChecked: boolean;

  async ngOnInit() {
    this.userRequired = false;
    this.repType = 2;
  }
  onRepTypeChange($event) {
    if ($event.value == 1) {
      this.userRequired = true;
    } else {
      this.userRequired = false;
    }
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm(): void {
    this.skillForm = this.fb.group({
      user: ["", ""],
      repType: ["",""]
    });
  }
  onfocus(element: FocusEvent): void {
    let target: HTMLInputElement = element.target as HTMLInputElement;
    let parentNode: HTMLElement = target.parentNode as HTMLElement;
    if (parentNode.classList.contains("e-input-in-wrap")) {
      parentNode = parentNode.parentNode as HTMLElement;
    }
    parentNode.classList.add("e-input-focus");
    parentNode.querySelector(".e-float-text").classList.add("e-label-top");
    parentNode
      .querySelector(".e-float-text")
      .classList.remove("e-label-bottom");
  }
  onblur(element: FocusEvent): void {
    let target: HTMLInputElement = element.target as HTMLInputElement;
    let parentNode: HTMLElement = target.parentNode as HTMLElement;
    if (parentNode.classList.contains("e-input-in-wrap")) {
      (parentNode.parentNode as HTMLElement).classList.remove("e-input-focus");
    }
    parentNode.classList.remove("e-input-focus");
    if (target.value === null || target.value === "") {
      parentNode.querySelector(".e-float-text").classList.remove("e-label-top");
      parentNode.querySelector(".e-float-text").classList.add("e-label-bottom");
    } else {
      parentNode.querySelector(".e-float-text").classList.add("e-label-top");
      parentNode
        .querySelector(".e-float-text")
        .classList.remove("e-label-bottom");
    }
  }
  onreset(element: MouseEvent): void {
    let parentNode: NodeListOf<HTMLElement> = document
      .getElementsByClassName("box-form")[0]
      .querySelectorAll(".e-float-text");
    for (let i: number = 0; i < parentNode.length; i++) {
      parentNode[i].classList.remove("e-label-top");
      parentNode[i].classList.add("e-label-bottom");
    }
  }
}
