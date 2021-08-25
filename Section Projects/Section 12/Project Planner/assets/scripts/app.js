class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class Tooltip {
    remove() {
        this.element.remove();
    }

    show() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'Dummy.!';
        tooltipElement.addEventListener('click', this.remove.bind(this));
        this.element = tooltipElement;
        document.body.append(tooltipElement);
    }
}


class ProjectItem {
    constructor(id, updateProjListsFunc, type) {
        this.id = id;
        this.projectListsHandler = updateProjListsFunc;
        this.connectMoreInfoBtn();
        this.connectSwitchBtn(type);
    }

    showMoreInfoHandler() {
        const tooltip = new Tooltip();
        tooltip.show();
    }

    connectMoreInfoBtn() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
    }

    connectSwitchBtn(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        if (type === 'active') {
            switchBtn.textContent = 'Finish';
        }
        else {
            switchBtn.textContent = 'Activate';
        }
        switchBtn.addEventListener('click', this.projectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFunc, type) {
        this.projectListsHandler = updateProjectListsFunc;
        this.connectSwitchBtn(type);
    }

}


class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projItem of projItems) {
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this), this.type));
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}


class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }
}

App.init();