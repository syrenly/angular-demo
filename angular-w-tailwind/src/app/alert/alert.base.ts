import { Directive, Input } from "@angular/core";
import { IAlertInfo } from "./alert.types";
import { DEFAULT_ALERT } from "./alert.utils";

@Directive()
export class AlertBase {
	/** The alert to be shown */
	@Input() alert: IAlertInfo = DEFAULT_ALERT;
}
