export interface Friend {
    name: string,
    time: string,
    fav: boolean,
    category: string,
    id: string,
}

export interface FriendsCategory {
    [key: string]: Friend[];
}

export interface FriendAction {
    actionName: 'ADD' | 'DELETE' | 'FAV',
    id: string,
    name: string,
    category: string,
    favValue?: boolean,
    newFriendInfo?: Friend, 
}

export interface Filter {
    searchKeyword: string | null;
    category: string | null;
}



