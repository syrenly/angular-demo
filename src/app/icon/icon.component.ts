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
	@Input() size: number = 1;
	@Input() unit: string = "rem";
	selectedIcon!: IconDefinition;

	ngOnChanges(changes: SimpleChanges): void {
		const icon = changes["icon"]?.currentValue;
		if (icon) {
			this.selectedIcon = ICON_DICTIONARY[icon];
		}
	}
}
