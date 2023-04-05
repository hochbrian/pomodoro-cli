export enum sessionType {
    "w" = "Work",
    "b" = "Break",
}

export type session = {
    session: sessionType,
    wkDuration?: number,
    bkDuration: number,
    label: string,
    sessionNumber: number
}

export const timers: {[id: string]: session[]}  = {
    demo: [
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 1
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 2
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 3
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.5,
            label: "Short Work",
            sessionNumber: 4
        },
        {
            session: sessionType.b,
            bkDuration: 0.5,
            label: "Lunch",
            sessionNumber: 5
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 6
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 7
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 8
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.5,
            label: "Short Work",
            sessionNumber: 9
        },
        {
            session: sessionType.w,
            wkDuration: 0.5,
            bkDuration: 0.25,
            label: "Short Work",
            sessionNumber: 10
        }
    ]
}