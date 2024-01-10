import React from "react";

export interface dashboardMonth {

}
export interface nav {
    activeNav: boolean;
    setActiveNav: React.Dispatch<React.SetStateAction<boolean>>
}

export interface weatherDetails {
    clouds: {
        all: number;
    };
    dt: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        deg: number;
        speed: number;
    };
    rain?: {
        '1h': number;
    }
}

export interface Polygon {
    area: number;
    center: [];
    created_at: number;
    geo_json: {
        geometry: {
            coordinates: [
                [
                    [], [], [], []
                ]
            ];
            type: string;
        };
        properties: {

        };
        type: string;
    }
    id: string;
    name: string;
    user_id: string
}

export interface ChatLogItem {
    user: string;
    message: null | string;
  }