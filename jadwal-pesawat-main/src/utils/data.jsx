
export const MASKAPAI = {
    GRD:{
        maskapai_id: "GRD",
        maskapai_nama: "Garuda Airline",
        maskapai_logo: "keren", 
    },
    SJW:{
        maskapai_id: "SJW",
        maskapai_nama: "Seriwijaya Air",
        maskapai_logo: "cool", 
    },
    LIO:{
        maskapai_id: "LIO",
        maskapai_nama: "Lion Air",
        maskapai_logo: "sugoi", 
    },
};

export const BANDARA = {
    SKH:{
        bandara_kode: "SKH",
        bandara_nama: "Soekarno Hatta",
    },
    RDN:{
        bandara_kode: "RDN",
        bandara_nama: "Raden Intan",
    },
    NGR:{
        bandara_kode: "NGR",
        bandara_nama: "Ngurah Rai",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "RDN",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "SKH",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "LIO"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "RDN",
        bandara_kode_tujuan: "NGR",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "NGR",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "NGR",
        bandara_kode_tujuan: "SKH",
        maskapai_id: "GRD"
    },
];