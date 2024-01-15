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
    // 위, 아래로 1% - 총 2% 그리기
    const paintingBorderRange = 1

    let drawRatio = (sRatio - drawMidInStart) / (drawMidInEnd - drawMidInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const drawCSX = drawRatio * canvasWidth
    const drawCDY =
        canvasHeight / 2 - (canvasHeight / 100) * paintingBorderRange
    const drawCSY = (canvasHeight / 100) * (paintingBorderRange * 2)
    const drawPSX = drawRatio * (drawRangeX2 - drawRangeX1)
    const drawPDY =
        (drawRangeY1 + drawRangeY2) / 2 -
        ((drawRangeY1 + drawRangeY2) / 2 / 100) * paintingBorderRange
    const drawPSY =
        ((drawRangeY1 + drawRangeY2) / 2 / 100) * (paintingBorderRange * 2)
    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawPDY,
        drawPSX,
        drawPSY,
        0,
        drawCDY,
        drawCSX,
        drawCSY,
    )
}

export const paintMidToAll = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawInStart, drawInEnd] = rangeInfo.drawMidToAllIn
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    // 위, 아래로 1% - 총 2% 그리기
    const paintingBorderRange = 1

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1
    const drawPicDefaultHeight =
        ((drawRangeY2 - drawRangeY1) / 100) * paintingBorderRange
    const drawYPStart = (drawRangeY1 + drawRangeY2) / 2 - drawPicDefaultHeight
    const drawYPDefaultRange = drawPicDefaultHeight * 2

    const drawYPRange = (drawRangeY2 + drawRangeY1) / 2 - drawPicDefaultHeight

    const drawCanvDefaultHeight = (canvasHeight / 100) * paintingBorderRange
    const drawYCStart = canvasHeight / 2 - drawCanvDefaultHeight
    const drawYCDefaultRange = drawCanvDefaultHeight * 2

    const drawYCRange = canvasHeight / 2 - drawCanvDefaultHeight

    const drawYP = drawYPRange * drawRatio
    const drawYC = drawYCRange * drawRatio

    // 윗 부분 그리기
    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawYPStart - drawYP,
        drawRangeX2 - drawRangeX1,
        drawYP,
        0,
        drawYCStart - drawYC,
        canvasWidth,
        drawYC,
    )

    // 아랫 부분 그리기
    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawYPStart,
        drawRangeX2 - drawRangeX1,
        drawYP + drawYPDefaultRange,
        0,
        drawYCStart,
        canvasWidth,
        drawYCDefaultRange + drawYC,
    )
}

export const drawBottomUpOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawInStart, drawInEnd] = rangeInfo.drawBottomUpOut
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)
    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const drawPRangeX = drawRangeX2 - drawRangeX1
    const drawPRangeY = drawRangeY2 - drawRangeY1

    const paintPSY = drawPRangeY - drawRatio * drawPRangeY
    const paintCSY = canvasHeight - drawRatio * canvasHeight

    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawRangeY1,
        drawPRangeX,
        paintPSY,
        0,
        0,
        canvasWidth,
        paintCSY,
    )
}
