import { IAlertInfo } from "./alert.types";

export const DEFAULT_ALERT: IAlertInfo = {
	message: "Default message",
	type: "default",
	width: 100,
	backgroundColor: "lightgray",
	color: "darkgray",
};

export const PRIMARY_ALERT: IAlertInfo = {
	message: "Hello!",
	type: "primary",
	width: 100,
	backgroundColor: "blue",
	color: "white",
};

export const SUCCESS_ALERT: IAlertInfo = {
	message: "Oh, yeah!",
	type: "success",
	width: 200,
	backgroundColor: "lightgreen",
	color: "black",
};

export const DANGER_ALERT: IAlertInfo = {
	message: "Oh, no!",
	type: "danger",
	width: 150,
	backgroundColor: "red",
	color: "white",
};
