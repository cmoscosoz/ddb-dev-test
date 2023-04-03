import React from 'react'
import data from 'data/notifications.json'
import { NotificationType as Notification } from 'types/notification'

type NotificationState = {
    notifications: Notification[],
    setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>,
    selectedNotification: Notification | null,
    setSelectedNotification: React.Dispatch<React.SetStateAction<Notification | null>>
}

const NotificationContext = React.createContext({} as NotificationState)

const AppWrapper = ({children}:{children:React.ReactNode}) => {
    const notificationsState: Array<Notification> = data.notifications.map((notification) => ({...notification, unread: true}))
    const [notifications, setNotifications] = React.useState<Notification[]>(notificationsState)
    const [selectedNotification, setSelectedNotification] = React.useState<Notification | null>(null)
    
    const NotificationState = { notifications,setNotifications, selectedNotification, setSelectedNotification }
    return(
        <NotificationContext.Provider value={NotificationState}>{children}</NotificationContext.Provider>
    )
}

const useAppContext = () => {
    return React.useContext(NotificationContext)
}

export { AppWrapper, useAppContext }