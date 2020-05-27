const imageNames: string[] = [
    "me.jpg",
    "ml_concept.jpg",
    "languages_concept.jpg",
    "games_concept.jpg",
    "graphics_concept.jpg"]

export const library: { [name: string]: HTMLImageElement } = {}

export function initResources(onLoaded: () => void)
{
    let loadedImages: number = 0
    for (let i in imageNames)
    {
        const imageName: string = imageNames[i]
        const imageObj: HTMLImageElement = new Image()
        imageObj.src = "images/" + imageName
        imageObj.onload = () => {
            library[imageName] = imageObj
            loadedImages += 1
            if (loadedImages === imageNames.length)
            {
                onLoaded()
            }
        }
    }
}
