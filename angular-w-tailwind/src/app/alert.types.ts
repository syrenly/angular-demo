/** Type of alert, based on the priority or severity */
export type AlertType = "primary" | "success" | "danger" | "unknown";
/** Properties that define an alert */
export interface IAlertInfo {
	message: string;
	type: AlertType;
	width: number;
	backgroundColor: string;
	color: string;
}
