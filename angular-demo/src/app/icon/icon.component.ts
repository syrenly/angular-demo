import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ICON_DICTIONARY } from "./icon-utils";
/** This component wraps Font Awesome component and uses a dictionary to map fa icons to well readable names
 * In this way, it will be easier in future to change the font used.
 */
@Component({
	selector: "app-icon",
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: "./icon.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
	@Input() icon = "";
	selectedIcon!: IconDefinition;
	@Input() size: number = 1;
	@Input() unit: string = "rem";

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["icon"]) {
			this.selectedIcon = ICON_DICTIONARY[this.icon];
		}
	}
}
