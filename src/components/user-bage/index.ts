import { Respondent } from '../../types/respondent.interface';
import { BaseComponent } from '../BaseComponent';
import avatarImage from '../../assets/avatar.png';
import { UserInfo } from '../user-info';
import './user-bage.css';

export class UserBadge extends BaseComponent {
    private user: Respondent;
    private tooltip!: UserInfo;

    constructor(respondent: Respondent) {
        super();

        this.user = respondent;
        this.render();
    }

    protected get template(): string {
        return `<div class="user-bage"></div>`;
    }

    protected render(): void {
        super.render();

        const avatar = document.createElement('img');
        const identifier = document.createElement('span');

        avatar.classList.add('user-bage__avatar');
        identifier.classList.add('user-bage__identifier');

        avatar.src = this.user.avatar || avatarImage;
        identifier.insertAdjacentText('beforeend', this.user.name || this.user.email || this.user.phone || '');

        this.setHoverListeners(avatar);
        this.node.append(avatar, identifier);
    }

    private setHoverListeners(avatarNode: HTMLImageElement): void {
        avatarNode.addEventListener('mouseover', (e: MouseEvent) => {
            this.tooltip = new UserInfo(this.user);
            this.node.append(this.tooltip.element);
            document.body.append(this.tooltip.element);

            const x = e.clientX;
            const y = e.clientY;

            this.tooltip.element.style.left = `${x + 15}px`;
            this.tooltip.element.style.top = `${y - 70}px`;
        });

        avatarNode.addEventListener('mouseout', () => {
            this.tooltip.destroy();
        });
    }
}
