export default class RestoService {
    url = "http://localhost:3000/menu";

    getMenuItems = async () => {
        const responce = await fetch(this.url);
        if(!responce.ok) {
            throw new Error ("Server error")
        }
        const result = await responce.json();
        return result;
    }
}