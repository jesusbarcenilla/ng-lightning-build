import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglTabs } from './tabs';
import { NglTab } from './tab';
import { NglTabVerbose, NglTabContent, NglTabLabel } from './tab-verbose';
import { NglInternalOutletModule } from '../util/outlet.module';
const NGL_TAB_DIRECTIVES = [
    NglTabs,
    NglTab,
    NglTabVerbose, NglTabContent, NglTabLabel,
];
export class NglTabsModule {
}
NglTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGL_TAB_DIRECTIVES],
                exports: [NGL_TAB_DIRECTIVES],
                imports: [CommonModule, NglInternalOutletModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctbGlnaHRuaW5nL3NyYy9saWIvdGFicy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRSxNQUFNLGtCQUFrQixHQUFHO0lBQ3pCLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXO0NBQzFDLENBQUM7QUFPRixNQUFNLE9BQU8sYUFBYTs7O1lBTHpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBOZ2xUYWJzIH0gZnJvbSAnLi90YWJzJztcbmltcG9ydCB7IE5nbFRhYiB9IGZyb20gJy4vdGFiJztcbmltcG9ydCB7IE5nbFRhYlZlcmJvc2UsIE5nbFRhYkNvbnRlbnQsIE5nbFRhYkxhYmVsIH0gZnJvbSAnLi90YWItdmVyYm9zZSc7XG5pbXBvcnQgeyBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZSB9IGZyb20gJy4uL3V0aWwvb3V0bGV0Lm1vZHVsZSc7XG5cbmNvbnN0IE5HTF9UQUJfRElSRUNUSVZFUyA9IFtcbiAgTmdsVGFicyxcbiAgTmdsVGFiLFxuICBOZ2xUYWJWZXJib3NlLCBOZ2xUYWJDb250ZW50LCBOZ2xUYWJMYWJlbCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05HTF9UQUJfRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFtOR0xfVEFCX0RJUkVDVElWRVNdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2xJbnRlcm5hbE91dGxldE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5nbFRhYnNNb2R1bGUge31cbiJdfQ==