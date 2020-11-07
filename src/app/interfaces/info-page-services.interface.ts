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