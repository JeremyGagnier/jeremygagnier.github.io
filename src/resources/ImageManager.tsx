import * as React from "react"
import { Images } from "./Images"

let loadedImages: number = 0
export function initResources(onLoaded: () => void): boolean
{
    const imageNames = Object.values(Images)
    return imageNames.reduce((allCached: boolean, imageName: string) =>
    {
        const imageObj: HTMLImageElement = new Image()
        imageObj.src = imageName
        imageObj.onload = () =>
        {
            if (loadedImages + 1 === imageNames.length)
            {
                onLoaded()
            }
            else
            {
                loadedImages += 1
            }
        }
        return allCached && imageObj.complete
    }, true)
}
