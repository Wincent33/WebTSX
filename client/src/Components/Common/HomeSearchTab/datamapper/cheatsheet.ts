import WilayahIndo from "../../../../Assets/Data/WilayahIndonesia.json";

export const DataMapper = () => {
  type Kecamatan = {
    name: string;
  };

  type Kota = {
    name: string;
    listKecamatan: Kecamatan[];
  };

  type Provinsi = {
    name: string;
    listKota: Kota[];
  };

  const listProvinsi: Provinsi[] = [
    {
      name: "Jakarta",
      listKota: [
        {
          name: "Jakarta Selatan",
          listKecamatan: [
            {
              name: "Thamrin",
            },
            {
              name: "Kuningan",
            },
          ],
        },
        {
          name: "Jakarta Timur",
          listKecamatan: [
            {
              name: "Cakung",
            },
            {
              name: "Tipar",
            },
          ],
        },
      ],
    },
    {
      name: "Jawa Barat",
      listKota: [
        {
          name: "Kota Bekasi",
          listKecamatan: [
            {
              name: "Medan Satria",
            },
            {
              name: "Tarumajaya",
            },
          ],
        },
        {
          name: "Kota Bandung",
          listKecamatan: [
            {
              name: "Dago",
            },
            {
              name: "Lembang",
            },
          ],
        },
      ],
    },
  ];

  type MyListComponent = {
    provinsi: string;
    kota: string;
    kecamatan: string;
  };

  const listData: MyListComponent[] = [];
  listProvinsi.forEach((provinsi) => {
    provinsi.listKota.forEach((kota) => {
      kota.listKecamatan.forEach((kecamatan) => {
        listData.push({
          provinsi: provinsi.name,
          kota: kota.name,
          kecamatan: kecamatan.name,
        });
      });
    });
  });

  console.log(
    listData.map((d) => `${d.provinsi} > ${d.kota} > ${d.kecamatan}`)
  );
};

DataMapper();
