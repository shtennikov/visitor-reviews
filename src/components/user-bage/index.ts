import { Respondent } from '../../types/respondent.interface';
import { BaseComponent } from '../BaseComponent';
import avatarImage from '../../assets/avatar.png';
import { UserInfo } from '../user-info';
import './user-bage.css';

export class UserBadge extends BaseComponent {
    private user: Respondent;
    private userInfoComponent: UserInfo;

    constructor(respondent: Respondent) {
        super();

        this.user = respondent;
        this.userInfoComponent = new UserInfo(respondent);
        this.render();
        this.renderBage();
    }

    protected get template(): string {
        return `<div class="user-bage"></div>`;
    }

    private renderBage(): void {
        const avatar = document.createElement('img');
        const identifier = document.createElement('span');

        avatar.classList.add('user-bage__avatar');
        identifier.classList.add('user-bage__identifier');

        avatar.src = this.user.avatar || avatarImage;
        identifier.insertAdjacentText('beforeend', this.user.name || this.user.email || this.user.phone || '');

        this.node.append(avatar, identifier);
    }
}
