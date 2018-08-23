# Get phone list

Get the list of available phones with their basic information and specs.

**URL** : `/phones/`

**Method** : `GET`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "5b7d9c17e60b717b1f08dfe6",
        "brand": "Xiaomi",
        "model": "Mi A1",
        "image": "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/11/27/goods-img/1511807406068939438.jpg",
        "specs": {
            "display": "5.5\"",
            "ram": "4GB",
            "storage": "64GB"
        },
        "description": "This GSM unlocked cell phone is compatible with most GSM carriers. Networks Supported: 4G FDD-LTE B1/B3/B4/B5/B7/B8/B20 TDD-LTE B38/B40 3G WCDMA 850/900/1900/2100MHz 2G GSM 850/900/1800/1900MHz\nDisplay: 5.5\" FHD LTPS Display 1920 x 1080, 403 PPI\nProcessor: Snapdragon 625, octa-core 2.0GHz, Adreno 506 650MHz graphics processor. Memory: 32GB ROM, 4GB RAM, Up to 128GB of expandable storage (microSD). Operating System: Android One\nDual Main Camera: Wide angle lens 12MP 1.25μm f / 2.2 and Telephoto lens 12MP 1.0 μm, f / 2.6\nFront Camera: 5MP 1.12μm, f / 2",
        "price": 189
    },
    ...
    {
        "_id": "5b7d9c17e60b717b1f08dfe7",
        "brand": "Samsung",
        "model": "Galaxy S9",
        "image": "https://cdn.eglobalcentral.com.es/images/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/2/3/23130/thumb360x360/4017305370/samsung-galaxy-s9-plus-g9650-dual-sim-4g-f0lklq.jpg",
        "specs": {
            "display": "5.8\"",
            "ram": "4GB",
            "storage": "64GB"
        },
        "description": "Super Speed Dual Pixel Camera\nInfinity Display: edge-to-edge immersive screen, enhancing your entertainment experience\nIP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free\nInternal Memory 64 GB. Expandable Storage up to 400GB\nFast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger.",
        "price": 799
    }
]
```
