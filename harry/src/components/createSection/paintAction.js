export const paintLRInOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawInStart, drawInEnd] = rangeInfo.drawIn
    const [drawOutStart, drawOutEnd] = rangeInfo.drawOut
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    const paintingBorder = (drawInEnd + drawOutStart) / 2
    if (sRatio < paintingBorder) {
        let drawCX =
            (canvasWidth * (sRatio - drawInStart)) / (drawInEnd - drawInStart)

        let drawIX =
            ((drawRangeX2 - drawRangeX1) * (sRatio - drawInStart)) /
            (drawInEnd - drawInStart)
        if (drawCX < 0) drawCX = 0
        else if (drawCX > canvasWidth) drawCX = canvasWidth

        if (drawIX < 0) drawIX = 0
        else if (drawIX > drawRangeX2 - drawRangeX1)
            drawIX = drawRangeX2 - drawRangeX1
        ctx.drawImage(
            paintImg,
            drawRangeX1,
            drawRangeY1,
            drawIX,
            drawRangeY2 - drawRangeY1,
            0,
            0,
            drawCX,
            canvasHeight,
        )
    } else {
        let drawCX =
            (canvasWidth * (sRatio - drawOutStart)) /
            (drawOutEnd - drawOutStart)
        let drawIX =
            ((drawRangeX2 - drawRangeX1) * (sRatio - drawOutStart)) /
            (drawOutEnd - drawOutStart)
        if (drawCX < 0) drawCX = 0
        else if (drawCX > canvasWidth) drawCX = canvasWidth

        if (drawIX < 0) drawIX = 0
        else if (drawIX > drawRangeX2 - drawRangeX1)
            drawIX = drawRangeX2 - drawRangeX1
        ctx.drawImage(
            paintImg,
            drawRangeX1 + drawIX,
            drawRangeY1,
            drawRangeX2 - (drawRangeX1 + drawIX),
            drawRangeY2 - drawRangeY1,
            drawCX,
            0,
            canvasWidth - drawCX,
            canvasHeight,
        )
    }
}

export const paintMidIn = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawMidInStart, drawMidInEnd] = rangeInfo.drawMidIn
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    // 위, 아래로 2%정도? - 총 4% 그리기

    let drawRatio = (sRatio - drawMidInStart) / (drawMidInEnd - drawMidInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const drawCSX = drawRatio * canvasWidth
    const drawCDY = canvasHeight / 2 - (canvasHeight / 100) * 2
    const drawCSY = (canvasHeight / 100) * 4
    const drawPSX = drawRatio * (drawRangeX2 - drawRangeX1)
    const drawPDY =
        (drawRangeY1 + drawRangeY2) / 2 -
        ((drawRangeY1 + drawRangeY2) / 2 / 100) * 2
    const drawPSY = ((drawRangeY1 + drawRangeY2) / 2 / 100) * 4
    // console.log(
    //     drawCDY,
    //     drawCSX,
    //     drawCSY,
    //     drawRangeX1,
    //     drawPDY,
    //     drawPSX,
    //     drawPSY,
    // )
    ctx.drawImage(
        paintImg,
        0,
        drawCDY,
        drawCSX,
        drawCSY,
        drawRangeX1,
        drawPDY,
        drawPSX,
        drawPSY,
    )
}
