/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Respondent } from '../../types/respondent.interface';
import { BaseComponent } from '../BaseComponent';
import avatarImage from '../../assets/avatar.png';
import './user-info.css';

export class UserInfo extends BaseComponent {
    private user: Respondent;

    constructor(respondent: Respondent) {
        super();

        this.user = respondent;
        this.render();
        this.renderUserData();
    }

    public get template(): string {
        return `<div class="user-info">
                <!-- User info -->
            </div>`;
    }

    private renderUserData(): void {
        const dataList = document.createElement('div');
        dataList.classList.add('user-info__list');

        const img = document.createElement('img');
        img.classList.add('user-info__img');
        img.src = this.user.avatar || avatarImage;
        img.alt = 'User avatar';

        dataList.append(img);
        this.user.name && dataList.append(this.renderItem(this.user.name));
        this.user.phone && dataList.append(this.renderItem(this.user.phone));
        this.user.email && dataList.append(this.renderItem(this.user.email));

        this.node.append(dataList);
    }

    private renderItem(content: string, tag = 'span'): Element {
        const item = document.createElement(tag);
        item.append(content);

        return item;
    }
}
