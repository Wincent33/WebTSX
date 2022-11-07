import WilayahIndo from "../../../../Assets/Data/WilayahIndonesia.json";

const DataMapper = () => {
  let listData = [];
  WilayahIndo.forEach((provinsi) => {
    provinsi.regencies.forEach((kabupaten) => {
      kabupaten.districts.forEach((kecamatan) => {
        listData.push({
          provinsi: provinsi.name,
          kabupaten: kabupaten.name,
          kecamatan: kecamatan.name,
        });
      });
    });
  });
  console.log(
    listData
      // .slice(0, 3000)
      .map((d) => `${d.kecamatan}, ${d.kabupaten}, ${d.provinsi}`)
  );
  return listData
    .slice(0, 300)
    .map((d) => `${d.kecamatan}, ${d.kabupaten}, ${d.provinsi}`);
};
export default DataMapper;
