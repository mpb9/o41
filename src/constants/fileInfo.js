export const IMAGES = {
  DIRS: {
    owner_group: "/img/owners/group",
    owner: (last_name = "beebe") => `/img/owners/${last_name}`,
    companies: "/img/companies",
  },
  logo: "/img/logo.png",
  logo_secondary: "img/logo-secondary.png",
  OWNER: {
    close_up: (last_name = "beebe") => `/img/owners/${last_name}/close-up.png`,
    full_body: (last_name = "beebe") =>
      `/img/owners/${last_name}/full-body.png`,
  },
};

// MARK: DOCUMENTS
export const DOCUMENTS = {
  locker_room_guy:
    "https://docs.google.com/document/d/10FduZwbcmfX3dedjUVTDcdZrOu0kQKoMX6C7iMBgsSc/edit?usp=sharing",
  punishments:
    "https://docs.google.com/spreadsheets/d/1NXQt9zkc82ljSSKEJcQZk9BWn8u9CoSpjK0HdojTXhQ/edit?usp=sharing",
};
