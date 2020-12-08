export interface InfoPageServices {
    error?: string,
    page_section?:
    {
        id?: number,
        page_id?: number;
        section_type_id?: number;
        section_title_h2?: string;
        section_title_h4?: string;
        section_title_h3?: string;
        section_parrafo_h3?: string;
        section_parrafo_h4?: string;
        section_parrafo_h2?: string;
        section_url_img?: string;
        section_title_h5?: string;
        section_parrafo_h5?: string;
        detalle?:
        {
            section_icon_id?: number;
            section_id?: number;
            parrafo_icon_text?: string;
        }
    }
}

export interface InfoPageSection {
    page_section?:
    {
        id?: number,
        page_id?: number;
        section_type_id?: number;
        section_title_h2?: string;
        section_title_h4?: string;
        section_title_h3?: string;
        section_parrafo_h3?: string;
        section_parrafo_h4?: string;
        section_parrafo_h2?: string;
        section_url_img?: string;
    }
}

export interface SolRequest {
    subject?: string;
    name?: string;
    message?: string;
    email?: string;
}

export interface ResponseServiceSingle {
    error?: string;
    mensaje?: string;
}

export interface ResponseServiceSingleWithID {
    error?: string;
    mensaje?: string;
    id?: string;
}
export interface InfoPageTeams {
    error?: string,
    numero_registros?: number;
    page_section?:
    {
        teams_id?: number;
        teams_position_id?: number;
        name_position?: string;
        teams_apellidos?: string;
        teams_nombres?: string;
        teams_telephone_1?: string;
        teams_telephone_2?: string;
        id_country?: number;
        name_country?: string;
        url_img_member_teams?: string;
        teams_parrafo_card?: string;
        facebook_have?: boolean;
        url_facebook_social_net?: string;
        twitter_have?: boolean;
        url_twitter_social_net?: string;
        whatsapp_have?: boolean;
        url_whatsapp_social_net?: string;
        address_uri_qr_whatsapp?: string;
        linkedin_have?: boolean;
        url_linkedin_social_net?: string;
    }
}