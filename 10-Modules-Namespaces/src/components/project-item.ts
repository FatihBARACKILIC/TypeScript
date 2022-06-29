/// <reference path="./base.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />

namespace App {
  export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
  {
    private project: Project

    get persons() {
      if (this.project.people === 1) return "1 person"
      return `${this.project.people} people`
    }

    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id)
      this.project = project

      this.configure()
      this.renderContent()
    }

    @AutoBind
    dragStartHandler(event: DragEvent): void {
      event.dataTransfer!.setData("text/plain", this.project.id)
      event.dataTransfer!.effectAllowed = "move"
    }

    dragEndHandler(_event: DragEvent): void {
      // console.log("DragEnd")
    }

    configure(): void {
      this.element.addEventListener("dragstart", this.dragStartHandler)
      this.element.addEventListener("dragend", this.dragEndHandler)
    }

    renderContent(): void {
      this.element.querySelector("h2")!.textContent = this.project.title
      this.element.querySelector("h3")!.textContent = this.persons + " assigned"
      this.element.querySelector("p")!.textContent = this.project.description
    }
  }
}
