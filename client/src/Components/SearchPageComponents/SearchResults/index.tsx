import React from "react";
import { WordifyRupiah } from "../../../Utils/WordifyRupiah";
import PropertyCards from "../../Common/PropertyCards";
import "./style.scss";
// import toRupiah from "@develoka/angka-rupiah-js";

export default function SearchResults() {
  const SearchData = [
    {
      devLogo:
        "https://www.sinarmasland.com/static/logo_sinarmas-dark-2d2bb249299fda48ad4a9d199e44c467.png",
      judul: "Hello1",
      harga: 2500000000,
      cicilan: 21,
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
      ],
      lokasi: "Kelapa Gading, Jakarta Timur",
      kecamatan: "Taruma Jaya",
      kabupaten: "Kota Bekasi",
      provinsi: "Jawa Barat",
      jumlahKamar: 3,
      jenisProperti: "Apartment",
      jumlahWC: 2,
      jumlahParkir: 2,
      jumlahLantai: 2,
      luasTanah: 100,
      luasBangunan: 200,
      sellerPhoto:
        "https://media-exp1.licdn.com/dms/image/C5103AQEdFj6T2u0e5g/profile-displayphoto-shrink_800_800/0/1587468262493?e=1670457600&v=beta&t=qqwlg4o3-uofkDOsLmFVh-VkpABe0bpWS9XYiZC4skM",
      sellerName: "Wincent Liuswinardo",
    },
    {
      devLogo:
        "https://www.sinarmasland.com/static/logo_sinarmas-dark-2d2bb249299fda48ad4a9d199e44c467.png",
      judul: "Hello2",
      harga: 3000000000,
      cicilan: 31,
      images: [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1384&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      ],
      kecamatan: "Thamrin",
      kabupaten: "Jakarta Selatan",
      provinsi: "DKI Jakarta",
      jumlahKamar: 2,
      jenisProperti: "rumah",
      jumlahWC: 2,
      jumlahParkir: 2,
      jumlahLantai: 2,
      luasTanah: 100,
      luasBangunan: 200,
      sellerPhoto:
        "https://media-exp1.licdn.com/dms/image/C5103AQEdFj6T2u0e5g/profile-displayphoto-shrink_800_800/0/1587468262493?e=1670457600&v=beta&t=qqwlg4o3-uofkDOsLmFVh-VkpABe0bpWS9XYiZC4skM",
      sellerName: "Wincent Liuswinardo",
    },
  ];
  //devLogo, harga, cicilan, images, judul,
  // lokasi, jumlahKamar, jumlahWC, jumlahParkir,
  //jumlahLantai, luasTanah, luasBangunan, sellerPhoto,
  //sellerName,
  // console.log(SearchData.length);
  const listItems = SearchData.map((element) => {
    return (
      <PropertyCards
        devLogo={element.devLogo}
        // harga={toRupiah(element.harga, {
        //   useUnit: true,
        //   longUnit: true,
        //   spaceBeforeUnit: true,
        //   formal: false,
        // })}
        harga={"Rp " + WordifyRupiah(element.harga)}
        // harga={element.harga}
        images={element.images}
        cicilan={element.cicilan}
        imageTotal={element.images.length}
        judul={element.judul}
        lokasi={element.lokasi}
        kecamatanValue={element.kecamatan}
        kabupatenValue={element.kabupaten}
        provinsiValue={element.provinsi}
        jumlahKamar={element.jumlahKamar}
        jumlahLantai={element.jumlahLantai}
        jumlahWC={element.jumlahWC}
        jumlahParkir={element.jumlahParkir}
        luasTanah={element.luasTanah}
        luasBangunan={element.luasBangunan}
        sellerPhoto={element.sellerPhoto}
        sellerName={element.sellerName}
        jenisProperti={element.jenisProperti}
      />
    );
  });
  return (
    <div>
      <div className="search-result">
        <div className="searched">{listItems}</div>
        <div className="right-side">ads</div>
      </div>
    </div>
  );
}
