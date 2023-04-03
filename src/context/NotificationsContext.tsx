import React from 'react'
import data from 'data/notifications.json'

const NotificationContext = React.createContext({})

const AppWrapper = ({children}:{children:React.ReactNode}) => {
    const notificationsState = data.notifications.map((notification) => ({...notification, unread: true}))
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