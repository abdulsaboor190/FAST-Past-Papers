// Subject Data Structure
const subjectPapers = {
  'programming-fundamentals': {
    title: 'Programming Fundamentals',
    description: 'Learn the basics of programming with C++ and problem-solving techniques',
    icon: 'PF',
    papers: {
        mid1: [
            {
                id: 'pf-2024-mid1',
                title: 'PF Mid 1 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '2.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1OG5vkVEDe1ZFEARNJcRvMrfU5N3ejDKQ&export=download&authuser=0&confirm=t&uuid=b2e4748c-fc86-4523-90e4-624eb59b7e94&at=AN8xHopzOYlkGxtYZXKx3dWhUVuC:1758023055522'
            },
            {
                id: 'pf-2023-mid1',
                title: 'PF Mid 1 2023',
                year: '2023',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1cy351ePScazlxY99z-mBoZsF4ifZSNkr&export=download&authuser=0&confirm=t&uuid=994dc872-714a-493b-bd7f-09fb275a728a&at=AN8xHopPyKmS7e9gAmuTGGNqCcNa:1758023049121'
            },
            {
                id: 'pf-2022-mid1',
                title: 'PF Mid 1 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1YbU6-UvvCydd6mc_g_TENdK5pZ07BLJ_&export=download&authuser=0&confirm=t&uuid=0012c784-7aac-49e9-92f3-d56e01c11904&at=AN8xHopmpXhwW9fM8SpZeG8kiuIt:1758023043497'
            },
            {
                id: 'pf-2020-mid1',
                title: 'PF Mid 1 2020',
                year: '2020',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1CrI05aRqEZgSd-vgkqZ5SC2aqP0V1SK3&export=download&authuser=0&confirm=t&uuid=9a9f54be-5d22-4610-ad4a-54fbc5047db8&at=AN8xHoog8ZET2X3Kv8hyULjQtE_v:1758023038290'
            },
            {
                id: 'pf-2019-mid1',
                title: 'PF Mid 1 2019',
                year: '2019',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1HXBMWiCzZrCpPd0J49dG_bWWxk5lEgcF&export=download&authuser=0&confirm=t&uuid=9831d722-7ddc-4102-b123-f8ed5de8fbda&at=AN8xHooodDdHqVYJOnnQzaVQxFJ7:1758023032823'
            },
            {
                id: 'pf-2018-mid1',
                title: 'PF Mid 1 2018',
                year: '2018',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=19VNoSlLxyjBf8KojIi4kja6ZQsHOCncT&export=download&authuser=0&confirm=t&uuid=65393970-e95f-471d-af36-ef551daa912a&at=AN8xHorQiI3PYbmIZH1mDcAuHi0D:1758023026419'
            },
            {
                id: 'pf-2017-mid1',
                title: 'PF Mid 1 2017',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1kNHBKFGS1tJl8zbKkLtI2AXGZmmltgpq&export=download&authuser=0&confirm=t&uuid=af2d7c92-bf35-401b-af7d-0cfd632892c1&at=AN8xHooa-jRC0sm8rjhVr-T2HzhC:1758023019846'
            }
        ],
        mid2: [
            {
                id: 'pf-2016-mid2',
                title: 'PF Mid 2 2016',
                year: '2016',
                semester: 'Fall',
                difficulty: 3.4,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1eiohWQ1z9Ma-2JzelYQSmD2FoaA5HUqc&export=download&authuser=0&confirm=t&uuid=1a43789d-80e7-47f0-9476-6629803d9c7f&at=AN8xHoq362obHCVTEzt2BmaG18g1:1758101713754'
            },
            {
                id: 'pf-2017-mid2',
                title: 'PF Mid 2 2017',
                year: '2017',
                semester: 'Spring',
                difficulty: 3.8,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Y-bbQF4RkZbQKclnw3WqdUq7rZ5O2KW9&export=download&authuser=0&confirm=t&uuid=591e5f95-e95d-4d03-8362-aa0aaf0926c1&at=AN8xHorL5iU0meCzJjF0j-NG09B5:1758101717707'
            },
            {
                id: 'pf-2019-mid2',
                title: 'PF Mid 2 2019',
                year: '2019',
                semester: 'Spring',
                difficulty: 3.6,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1rBiX3pM-zyQZ8G_xIEI4plvkT_4nmE2g&export=download&authuser=0&confirm=t&uuid=35692886-e2a0-4226-ab2e-868abcde9a4c&at=AN8xHoo0erfY5faTuVlUQsgZNr5g:1758101722397'
            },
            {
                id: 'pf-2020-mid2',
                title: 'PF Mid 2 2020',
                year: '2020',
                semester: 'Fall',
                difficulty: 3.3,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=10tDjTUvb1dgSopjuzD_JIWPECOoslMUk&export=download&authuser=0&confirm=t&uuid=5640d371-b5a8-43cb-b07f-1684df68af2d&at=AN8xHopanEjt6717FsstPHgtRjuJ:1758101726076'
            },
            {
                id: 'pf-2021-mid2',
                title: 'PF Mid 2 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.8 MB',
                difficulty: 4.1,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1oHC9eURdPVhwiDtg3xT81r9bROTG1oRw&export=download&authuser=0&confirm=t&uuid=0ccbced4-8a0d-48b3-a3e9-e0fae5057dfd&at=AN8xHooBrXkqmrveJiR2VnoLbJlb:1758101730312'
            },
            {
                id: 'pf-2022-mid2',
                title: 'PF Mid 2 2022',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ST_srE6dR7PuT_YYmrZBMi91eexXeQR3&export=download&authuser=0&confirm=t&uuid=85122d5d-a0b2-4861-9264-9797fbf0c1e4&at=AN8xHorYWZlWobqkpVnTk_3d_MzP:1758101733872'
            },
            {
                id: 'pf-2023-mid2',
                title: 'PF Mid 2 2023',
                year: '2023',
                semester: 'Fall',
                difficulty: 4.6,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1xwJUpjV_U3HTPiPhcf2FLCnKoorWAPrR&export=download&authuser=0&confirm=t&uuid=b8d90d1c-df1c-49f2-81b3-6e60cf364b7d&at=AN8xHooanuFX8RXGoety58VCGeHs:1758101738550'
            },
            {
                id: 'pf-2024-mid2',
                title: 'PF Mid 2 2024',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=19y1zEFwoJNSU_pmTJx1V3T7BI2CPQvgy&export=download&authuser=0&confirm=t&uuid=37bbd2ce-b59b-4800-a61d-8b9ad4b61ce5&at=AN8xHop0_sYoMS_gzCoEaH2iFzJP:1758101742222'
            },
            {
                id: 'pf-2020-mid2-LHR',
                title: 'PF Mid 2 2020 LHR',
                year: '2020',
                semester: 'Spring',
                difficulty: 4.8,
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1CnnG9QkxIHWi_f0TKNV5Czlk_pGxXZib&export=download&authuser=0&confirm=t&uuid=24859038-a5d3-4482-be3a-0c2101845ca9&at=AKSUxGPLdjXqrQIzPdAQyFuSn8Us:1760096311424'
            },
            {
                id: 'pf-2019-mid2-LHR',
                title: 'PF Mid 2 2019 LHR',
                year: '2019',
                semester: 'Spring',
                fileSize: '2.2 MB',
                difficulty: 3.9,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1DGVxoAq-2dStaHBjtivM0i6ppEE5EWxR&export=download&authuser=0&confirm=t&uuid=5f47e105-c1f0-4c8d-9fb4-be331d151e53&at=AKSUxGPlPz2FpjlCgyIbfPEds4vr:1760096306821'
            },
            {
                id: 'pf-2018-mid2-LHR',
                title: 'PF Mid 2 2018 LHR',
                year: '2018',
                semester: 'Spring',
                fileSize: '2.3 MB',
                difficulty: 3.7,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ESPedFezk6l9pLVEXWwkZEFuQ1R7bV7Q&export=download&authuser=0&confirm=t&uuid=6471b129-5583-4735-ad53-62f870a89440&at=AKSUxGPv_lVFeG2iDfzo-2W8zPpP:1760096301046'
            }
        ],
        final: [
            {
                id: 'pf-2017-final',
                title: 'PF Final 2017',
                year: '2017',
                semester: 'Spring',
                fileSize: '2.0 MB',
                difficulty: 3.4,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1rvLCGokufonyqdOllbXHfQG-GGFboHpt&export=download&authuser=0&confirm=t&uuid=b1181a35-29c4-42e1-ad0b-5383b569c756&at=AN8xHoo8j8UGfUK-jwHzgpuW0gYr:1758101749309'
            },
            {
                id: 'pf-2018-final',
                title: 'PF Final 2018',
                year: '2018',
                semester: 'Fall',
                difficulty: 3.7,
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1gQZ8kPog9ltyyZ5RXMP10561Qei3fDIs&export=download&authuser=0&confirm=t&uuid=7b995052-d514-4c7c-b71a-51e030436626&at=AN8xHopIVnGKupLkN6aIlelibq9b:1758101753573'
            },
            {
                id: 'pf-2019-final',
                title: 'PF Final 2019',
                year: '2019',
                difficulty: 3.9,
                semester: 'Spring',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1gwfEUhpPFO0lRME3KCEmCluh5o0g6vdj&export=download&authuser=0&confirm=t&uuid=b69bade4-0032-46ac-bcc5-7e8abdb3e4c4&at=AN8xHoqQxw0-WzsvADd1Zeqw2uO0:1758101757679'
            },
            {
                id: 'pf-2020-final',
                title: 'PF Final 2020',
                year: '2020',
                difficulty: 4,
                semester: 'Fall',
                fileSize: '2.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1dA2l01hSpDRe8JfipgY85_K6gNU8jM8z&export=download&authuser=0&confirm=t&uuid=6679ca06-27f2-4cb8-b09a-68182bec1d09&at=AN8xHor7XpbamGzUVY46x-CKT6Jk:1758101763618'
            },
            {
                id: 'pf-2021-final',
                title: 'PF Final 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '2.3 MB',
                difficulty: 4.2,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1n9iYqU8JTp-CUSoie7Do6e9ClvL-W-WI&export=download&authuser=0&confirm=t&uuid=6738ce18-5705-40a5-8ac0-812113b69647&at=AN8xHoqw9BuZra73hEuqtgLwTnta:1758101767765'
            },
            {
                id: 'pf-2022-final',
                title: 'PF Final 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '2.5 MB',
                difficulty: 4.4,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1n5HfarHR8V682VGDiIOV6Jw45c1YxlOO&export=download&authuser=0&confirm=t&uuid=aba0a953-9ae0-4a28-8780-829a0ee55879&at=AN8xHorg_kdwuG4kgKlvrwJXCvy3:1758101772397'
            },
            {
                id: 'pf-2023-final',
                title: 'PF Final 2023',
                year: '2023',
                semester: 'Fall',
                difficulty: 4.8,
                fileSize: '2.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1-N_Gs1Me_a22KQMPtw7jUKXfqbVX5V64&export=download&authuser=0&confirm=t&uuid=0a054c8e-3873-4dc9-9739-19a8093feef3&at=AN8xHop-6xMtbZEx9ilW_usdfh8t:1758101775736'
            },
            {
                id: 'pf-2024-final',
                title: 'PF Final 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '3.2 MB',
                difficulty: 4.6,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1eVhQGO36hkrTlpOV41P3owBoSrIf05YZ&export=download&authuser=0&confirm=t&uuid=93bf4113-840f-40cf-a740-7f2ccb31116d&at=AN8xHorgHakzbxI20F4EmiCo9sUS:1758101781689'
            },
             {
                id: 'pf-2019-final-LHR',
                title: 'PF Final 2019 LHR',
                year: '2019',
                semester: 'Spring',
                difficulty: 4.1,
                fileSize: '2.1 MB',
                difficulty: 4.1,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=104gPKXrcz0O_7fBB0JXml842vn5KU8Sg&export=download&authuser=0&confirm=t&uuid=56739ebf-b43a-4160-8729-675066df4a32&at=AKSUxGPX2Q-as6wBsf9efb3JkOvs:1760096639786'
            }
        ],
        quiz: [
            {
                id: 'pf-2024-quiz1',
                title: 'PF Class Handwritten Notes',
                year: '2024',
                semester: 'Spring',
                fileSize: '5 MB',
                difficulty: 4,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1hwR52-QqWZIa8atuF_S-QeERcm7dN942&export=download&authuser=0&confirm=t&uuid=35d6f7c8-2e37-4b2d-9c80-e9f9569a2cc0&at=AKSUxGMzJusjI4FtPDhzT30G5b8f:1760107785097' // Placeholder - add real URL when available
            }, 
            {
                id: 'pf-Handwritten',
                title: 'PF Handwritten Notes',
                year: '2024',
                semester: 'Spring',
                fileSize: '30 MB',
                difficulty: 5,
                downloadUrl: '#' // Placeholder - add real URL when available
            }
        ]
    }
},
'coal-theory': {
    id: 'coal-theory',
    title: 'Computer Organization and Assembly Language',
    description: 'Computer organization fundamentals and assembly language programming theory',
    icon: '🔧',
    papers: {
        mid1: [
            {
                id: 'coal-theory-mid1-2024',
                title: 'COAL Theory Mid 1',
                semester: 'Spring',
                year: '2024',
                difficulty: '4.0',
                fileSize: '2.1 MB',
                downloadUrl: 'path/to/your/paper.pdf'
            },
            // Add more Mid 1 papers here
        ],
        mid2: [
            {
                id: 'coal-theory-mid2-2024',
                title: 'COAL Theory Mid 2 (2024)',
                semester: 'Spring',
                year: '2024',
                difficulty: '4.6',
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1kmZuMPaMurk-V4d-IcsPly5jYHw0h5mI&export=download&authuser=0&confirm=t&uuid=f5097fcf-61ed-4a65-a361-c0d624efe705&at=AKSUxGNHSIeCxr5pyNzY9XkWTNtl:1762057302442'
            },
            {
                id: 'coal-theory-mid2-2022',
                title: 'COAL Theory Mid 2 (2022)',
                semester: 'Spring',
                year: '2022',
                difficulty: '4.3',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1HvCxzOFOxHndpu_3HezXms76hesFrlMr&export=download&authuser=0&confirm=t&uuid=f8d794d3-9961-4e5c-841e-676652037bf0&at=AKSUxGPsi0_ZejZFbSSuNWKr9z4-:1762057295573'
            },
            {
                id: 'coal-theory-mid2-2021',
                title: 'COAL Theory Mid 2 (2021)',
                semester: 'Spring',
                year: '2021',
                difficulty: '4.2',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1N4bJGDRrKeAw1OT6Tvzwpz-0JK78VXp-&export=download&authuser=0&confirm=t&uuid=303d1cd7-5ef4-459c-8e73-65d74ec9cc7e&at=AKSUxGPMuJVwERuus5O2xTvrZRmM:1762057291311'
            },
            {
                id: 'coal-theory-mid2-2020',
                title: 'COAL Theory Mid 2 (2020)',
                semester: 'Spring',
                year: '2020',
                difficulty: 4.0,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1SxkqUGJ2qI5MJCXwHZ38xJzVGu5_wY7K&export=download&authuser=0&confirm=t&uuid=62082618-68c0-4ed0-8348-85b30a5319b7&at=AKSUxGOJr4CoueH137pJRth7US3v:1762057286971'
            },
            {
                id: 'coal-theory-mid2-2019-fall',
                title: 'COAL Theory Mid 2 (2019 Fall)',
                semester: 'Fall',
                year: '2019',
                difficulty: 3.9,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1G18aQ6zUuFpy0cQfZnIV9In2RWwqwiCc&export=download&authuser=0&confirm=t&uuid=c25b5143-b5f3-4c90-83ce-7d6330043c42&at=AKSUxGMR_U-sRme8ZBODuYr3vdUe:1762057273626'
            },
            {
                id: 'coal-theory-mid2-2019-spring',
                title: 'COAL Theory Mid 2 (2019 Spring)',
                semester: 'Spring',
                year: '2019',
                difficulty: 3.8,
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1TpsecQuBp9YBL7e7MZJYOHL7KKAXOFhB&export=download&authuser=0&confirm=t&uuid=683da082-5730-4fe1-a6a7-4a0f6f1b9f79&at=AKSUxGNkgJ_14-errrFkA2ZwwTOF:1762057283095'
            }
        ],
        final: [
                {
        "id": "coal-final-2024",
        "title": "COAL Final 2024",
        "semester": "Spring",
        "year": "2024",
        "difficulty": "4.4",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1oklHXgAFSX4ixfkA7Kcq6mY4J8Xyqgv8&export=download&authuser=0&confirm=t&uuid=5903c314-7d89-4dc9-b27b-d694219430f7&at=ALWLOp7-zZXyp4frzVss06BWFpOA:1763016820811"
    },
    {
        "id": "coal-final-2022",
        "title": "COAL Final 2022",
        "semester": "Fall",
        "year": "2022",
        "difficulty": "4.0",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1cvOPjWvUFIPK-bWrccu-jvcLUPQycD6n&export=download&authuser=0&confirm=t&uuid=1b1c5ffb-3a07-4671-beba-ac13d99d0863&at=ALWLOp5BPvXK2S8xWS-KWFbRrYjZ:1763016804818"
    },
    {
        "id": "coal-final-2020-spring",
        "title": "COAL Final 2020 Spring",
        "semester": "Spring",
        "year": "2020",
        "difficulty": "3.5",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1Vwoj8_jycrw3qKY-pVQKH4rO1T9iCrA6&export=download&authuser=0&confirm=t&uuid=fa0cbcc2-3504-4b08-a3b2-52b79ba17029&at=ALWLOp4MiFaipQhzxQudwsgdVdaw:1763016798173"
    },
    {
        "id": "coal-final-2020-fall",
        "title": "COAL Final 2020 Fall",
        "semester": "Fall",
        "year": "2020",
        "difficulty": "3.8",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1SvM9TKiGg22ZFpi4m2yCfxLALkD5WAi4&export=download&authuser=0&confirm=t&uuid=80e26364-31e5-4846-ac20-ddb5cc5b94d1&at=ALWLOp7uUsi3UtoKS_QFIxhuQvyi:1763016793154"
    },
    {
        "id": "coal-final-2024-lhr",
        "title": "COAL Final 2024 LHR",
        "semester": "Spring",
        "year": "2024",
        "difficulty": "4.5",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1DDGUgG1HR2PZdxFwryNiCClrQW_aHQKm&export=download&authuser=0&confirm=t&uuid=0327a03c-90a2-4363-a52d-3446486e8a1d&at=ALWLOp4K1ZkVJ7hHWFgCBNDR_8PV:1763016817971"
    },
    {
        "id": "coal-final-2023-lhr",
        "title": "COAL Final 2023 LHR",
        "semester": "Fall",
        "year": "2023",
        "difficulty": "4.3",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1rb9Gh_0v8QHHVNMHArzh7hdsAE5MLAFd&export=download&authuser=0&confirm=t&uuid=d8c679a2-7b9a-4db8-b2ea-eca1d292e7be&at=ALWLOp4kO2M5B15n3kyUD-gkGAUC:1763016815345"
    },
    {
        "id": "coal-final-2023-isb",
        "title": "COAL Final 2023 ISB",
        "semester": "Fall",
        "year": "2023",
        "difficulty": "4.1",
        "downloadUrl": "https://drive.usercontent.google.com/download?id=1lIQEbqlWYWzD5G_IiyGNBFVhnibp2nKy&export=download&authuser=0&confirm=t&uuid=4dfe3ef8-c69a-4f3a-9f02-542deeaaf81f&at=ALWLOp5F4xdN6MRchGeR7ALnfrDp:1763016810481"
    }
        ]
    }
},

'oop': {
    title: 'Object Oriented Programming',
    description: 'Object-oriented programming concepts, inheritance, polymorphism, and design patterns',
    icon: 'OOP',
    papers: {
        mid1: [
            {
                id: 'oop-mid1-2024-spring',
                title: 'OOP Mid 1 2024 Spring',
                semester: 'Spring',
                year: 2024,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1sDETAVed0aU4frkCNXwQdQ4mZw8yHgjr&export=download&authuser=0&confirm=t&uuid=5570751d-8489-47db-9b85-9888a000bd5e&at=AN8xHorwzq-OVf8zilYeXoypfQEr:1758103439873'
            },
            {
                id: 'oop-mid1-2024-fall',
                title: 'OOP Mid 1 2024 Fall',
                semester: 'Fall',
                year: 2024,
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1MaFi5NqawHs_Jl_Edqi7ur4MrOUzuf6D&export=download&authuser=0&confirm=t&uuid=18d09911-ce47-41b9-99af-dfadc0ae90d0&at=AN8xHor6ROViXlwKp4LuWYSav8rH:1758103436538'
            },
            {
                id: 'oop-mid1-2023',
                title: 'OOP Mid 1 2023',
                semester: '',
                year: 2023,
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Gte0tZeMV2E4bCUnWnPa1qEe1Odzc3Vq&export=download&authuser=0&confirm=t&uuid=a8fdf153-6158-49fb-b982-8e79cd83f96d&at=AN8xHoqk9ANCIzVy5hxoDuPV7g2d:1758103432784'
            },
            {
                id: 'oop-mid1-2022',
                title: 'OOP Mid 1 2022',
                semester: '',
                year: 2022,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1AeTjbhHXFoO89M3zwk5NTlJD7KtAEmzZ&export=download&authuser=0&confirm=t&uuid=4d007b28-649b-49df-ad1b-8c0625ea1857&at=AN8xHorzfCTLZ4PiWDhY1gVBQw_f:1758103429095'
            },
            {
                id: 'oop-mid1-2021',
                title: 'OOP Mid 1 2021',
                semester: '',
                year: 2021,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=17Vr32yRiVQsLhx6TgwM6gqy_FIJpUFCZ&export=download&authuser=0&confirm=t&uuid=a9218e38-ac46-4798-822f-300fec33c749&at=AN8xHooKHl0f24gsLvfhA-MnhbkG:1758103424525'
            },
            {
                id: 'oop-mid1-2019-spring',
                title: 'OOP Mid 1 2019 Spring',
                semester: 'Spring',
                year: 2019,
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1qAFIN_-EGCVsvaN2ggpiL93TWyq0mqL2&export=download&authuser=0&confirm=t&uuid=7ed59aad-ca79-4a08-b383-bd5258b33128&at=AN8xHoq2Spd5s-KnMidtiGJtHUF6:1758103411381'
            },
            {
                id: 'oop-mid1-2019-fall',
                title: 'OOP Mid 1 2019 Fall',
                semester: 'Fall',
                year: 2019,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1df_vbv7qXVY--5qnS_b6tXjUE071Cs-_&export=download&authuser=0&confirm=t&uuid=d617ed6e-b438-40ca-94dd-9dd558f2a820&at=AN8xHoos-QgwjmAU5Rb2r27y07-o:1758103385733'
            }
        ]
    }
},

'information-security': {
    name: 'Information Security',
    papers: {
        mid1: [
            {
                id: 'is-2022-spring-mid1-lhr',
                title: 'IS Mid 1 2022 (LHR)',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1sPbslybLaeQZArWVFWAp6UCQP86c_mSm&export=download&authuser=0&confirm=t&uuid=57b19b02-00d0-4ebe-9627-455431d2a203&at=AN8xHoryiBgx-kfhrH9Y6MF422T5:1758103982869'
            },
            {
                id: 'is-2023-spring-mid1-lhr',
                title: 'IS Mid 1 2023 (LHR)',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1EKnqMm3D5Gh7-ZB05r_-it8ngULHaPez&export=download&authuser=0&confirm=t&uuid=f36b7960-e91f-4a69-9e12-23cc871bd351&at=AN8xHor1u0sk65DpB23_C6kHs0c5:1758103987451'
            },
            {
                id: 'is-2024-spring-mid1-lhr',
                title: 'IS Mid 1 2024 (LHR)',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1cWfR05ET_z3VA46leFykLEAYnMufPNwy&export=download&authuser=0&confirm=t&uuid=61f0850b-f674-4e97-8035-78cc195c30de&at=AN8xHoppkIzbByF2Gt98LftHuzmv:1758103990719'
            }
        ]
    }
},

'operating-system': {
    title: 'Operating System',
    description: 'OS concepts, process management, memory management, and file systems',
    icon: 'OS',
    papers: {
        mid1: [
            {
                id: 'os-2017-spring-mid1',
                title: 'OS Mid 1 2017',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1znTslcoj1i-cHCbahelVHyRD_mcHf5KS&export=download&authuser=0&confirm=t&uuid=b673c34c-289b-4d8d-be5c-e6ef6370afb1&at=AN8xHorZ4P5kYSe1UXuNs1h_2mxB:1758104068291'
            },
            {
                id: 'os-2019-spring-mid1',
                title: 'OS Mid 1 2019',
                year: '2019',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1uC1t5Yd0bqnPS0Hdqrizhx3R9myOctJe&export=download&authuser=0&confirm=t&uuid=33810229-f48b-42f6-a000-d65068495af0&at=AN8xHor7WfuLrjybkyigQ0iHzYmq:1758104074271'
            },
            {
                id: 'os-2021-spring-mid1',
                title: 'OS Mid 1 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Xvw0v9azAHF7yPXZNfkISD5KJTU8m01K&export=download&authuser=0&confirm=t&uuid=cbdcb941-c221-4530-80df-b28b2febfa3e&at=AN8xHoqidpbmnbPUH4QLL3c8f6JL:1758104078131'
            },
            {
                id: 'os-2022-spring-mid1',
                title: 'OS Mid 1 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1cvCpJUU-OO8emVxW2Nmb6ZMuSLW_uT9k&export=download&authuser=0&confirm=t&uuid=d388e68b-bad7-48b8-b744-9cc2830ab96f&at=AN8xHopkj8JxCE8JzeNgQk-Ew0ss:1758104082243'
            },
            {
                id: 'os-2024-spring-mid1',
                title: 'OS Mid 1 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=19yIgw9dFER4tP6jCcHNgcUF_jJYxOENx&export=download&authuser=0&confirm=t&uuid=de148e37-7a32-481d-9838-9d3040e931e1&at=AN8xHooociXiomB-CAIm9DBe5JMz:1758104108507'
            },
            {
                id: 'os-2024-spring-mid1-part2',
                title: 'OS Mid 1 2024 Part 2',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1jTu6KUvSa8O7CUcl1qclfHS-6F_VuekO&export=download&authuser=0&confirm=t&uuid=d30fd8a8-abb3-4d75-934f-e76ea9fdecc9&at=AN8xHorT8AmqNxgbliGrm6QZCp_u:1758104086992'
            },
            {
                id: 'os-2025-spring-mid1',
                title: 'OS Mid 1 2025',
                year: '2025',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QU8aximxXnyIJpV_a2UmryhlgquqgrQL&export=download&authuser=0&confirm=t&uuid=d7168149-69de-44c6-a353-753f8d36e17a&at=AN8xHoqUP7_Wyzfr0NlbAFKhucSQ:1758104113509'
            }
        ], 
        mid2: [
            {
                id: 'os-mid2-2017-fall',
                title: 'OS Mid 2 2017',
                year: '2017',
                semester: 'Fall',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Fggm2q4c2p-sBCMxGQaqw-Iz41sAoKYK&export=download&authuser=0&confirm=t&uuid=6edf322e-ca30-47b4-a8e4-9ddffebc948d&at=APcXIO19MppgFT2bXv8tJF8fyO9Z:1769161589338'
            },
            {
                id: 'os-mid2-2019-fall',
                title: 'OS Mid 2 2019',
                year: '2019',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1lfbrigo-QdovCnGVUYEpANV5b94HGQLc&export=download&authuser=0&confirm=t&uuid=3181b278-d383-4cbe-b6a8-5880f91aa2d5&at=APcXIO2NYMnu6pMx4DPpm548fkKx:1769161584836'
            },
            {
                id: 'os-mid2-2021-fall',
                title: 'OS Mid 2 2021',
                year: '2021',
                semester: 'Fall',
                fileSize: '1.4 MB',
                downloadUrl: ''
            },
            {
                id: 'os-mid2-2022-fall',
                title: 'OS Mid 2 2022',
                year: '2022',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1J3hr6cPjDvI7KtvyR9rAmAu3oAZ-gqYG&export=download&authuser=0&confirm=t&uuid=41592ab0-6e66-4904-a40f-2afcaa722d98&at=APcXIO0Tbc2GM-oyKaFJwqmARnSZ:1769161580667'
            },
            {
                id: 'os-mid2-2023-fall',
                title: 'OS Mid 2 2023',
                year: '2023',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1MFhlxmDa9iIzj41I0qNjyfYKTS-7I61a&export=download&authuser=0&confirm=t&uuid=76b8cb06-18d9-4b73-8753-b60474b3704b&at=APcXIO2a2HsM__6tIJ-s7m-bN4jF:1769161576165'
            },
            {
                id: 'os-mid2-2024-fall',
                title: 'OS Mid 2 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1GanEJcsBpcP8FqZ_Y6I33Vm3UagOCs3i&export=download&authuser=0&confirm=t&uuid=6fbc57ad-715d-42ac-b6fb-25f1da6e19ca&at=APcXIO0ZQ6itpDZCbW0s62gcvdv9:1769161568536'
            },
            {
                id: 'os-mid2-2024-fall-solution',
                title: 'OS Mid 2 2024 Solution',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1rcc279jwa0fYud4vt62toNdLIQwlA3Of&export=download&authuser=0&confirm=t&uuid=c5210243-2817-4107-a99b-a83ccf631fa3&at=APcXIO1gT0ft1r5zt7TAmearMchv:1769161572419'
            },
            {
                id: 'os-mid2-2025-fall',
                title: 'OS Mid 2 2025',
                year: '2025',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=11TYeYcGU_fIoJ_Ppg2ncxKopZKJ-pLBA&export=download&authuser=0&confirm=t&uuid=c0f7dcd9-8451-4a4d-ba6e-1652e97c27d4&at=APcXIO1rNE6OWcmJY9Pzjlmj-ANG:1769161561057'
            }
        ],
    
        final: [
            {
                id: 'os-final-2017-fall',
                title: 'OS Final 2017',
                year: '2017',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ymsGZUuK220ftL-52VHKzm-FUammuKvL&export=download&authuser=0&confirm=t&uuid=e14d708c-6516-495b-9d1f-bebbcbb4d78b&at=APcXIO0FHxZXx4yTgD0y-t82OTgm:1769161647560'
            },
            {
                id: 'os-final-2020-fall',
                title: 'OS Final 2020',
                year: '2020',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1trkNvCSxi3yKwXb19PARGWi8azgCDFWP&export=download&authuser=0&confirm=t&uuid=9cae547d-abc6-49dc-8053-4bb1a3767877&at=APcXIO3ZQgXshrYpIk9SFwPUqevF:1769161639857'
            },
            {
                id: 'os-final-2020-fall-solution',
                title: 'OS Final 2020 Solution',
                year: '2020',
                semester: 'Fall',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1VtEpZhE6sSwKh8wQG4i4iScE9SELs9uk&export=download&authuser=0&confirm=t&uuid=978a452e-4b50-4c21-8a73-3b9d4ce5f99e&at=APcXIO0JHvJgpMEWj-R1EbQ5dVsX:1769161643885'
            },
            {
                id: 'os-final-2022-fall',
                title: 'OS Final 2022',
                year: '2022',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1w6G9VrEYb_M_0CbK5_Lipe7HAdnhtEk1&export=download&authuser=0&confirm=t&uuid=2df9ad15-9538-46de-82dc-03cbf633cb87&at=APcXIO2eLlnEJtS17uUG1J3XGzx2:1769161635865'
            },
            {
                id: 'os-final-2024-fall',
                title: 'OS Final 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1XMgE0lSD3BT-iLt_Br-rQ4kbtsI3AL2X&export=download&authuser=0&confirm=t&uuid=19042fef-f6d5-4e08-9744-c2dae8be1ab8&at=APcXIO2_RZ4Kwiej_ZkYXZf67wye:1769161627932'
            },
            {
                id: 'os-final-2024-fall-solution',
                title: 'OS Final 2024 Solution',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1KmkIXtLq-EUTa46i4Mu5sOi1D9LQKD0j&export=download&authuser=0&confirm=t&uuid=1a6f621d-fb58-4391-bec1-9c822c058973&at=APcXIO0iU_efrYlmjJby6XK3crAj:1769161631912'
            },
            {
                id: 'os-final-2025-fall-part-a',
                title: 'OS Final 2025 Part A',
                year: '2025',
                semester: 'Fall',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1lyw-JeBSGP0kx69G3FNkIwiuc55uO2SP&export=download&authuser=0&confirm=t&uuid=22f9775a-f3dc-47b1-aa00-5b69548b951a&at=APcXIO15yil7xjW1ywydhqI_3fHs:1769161618295'
            },
            {
                id: 'os-final-2025-fall-part-b',
                title: 'OS Final 2025 Part B',
                year: '2025',
                semester: 'Fall',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1e_9YalfQhP8Q_hFIEwVS9vYcu6SGvG0e&export=download&authuser=0&confirm=t&uuid=f0100edc-c31d-4f51-a48a-f5cca94ef672&at=APcXIO1EAqmmLA31Er9Nq8F4lvUf:1769161606855'
            }
        ]
    }
},

'operation-research': {
    name: 'Operation Research',
    papers: {
        mid1: [
            {
                id: 'or-2021-spring-mid1',
                title: 'Operation Research Mid 1 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1JKW5BVdhjkxuL501Wj4ItGaxI9ekAnXv&export=download&authuser=0&confirm=t&uuid=0c48ed78-2446-4398-9724-efa71109fb4e&at=AN8xHooJt02OxdTXpB1a3Jrk8RUz:1758104214154'
            },
            {
                id: 'or-2022-spring-mid1',
                title: 'Operation Research Mid 1 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1a_-Ctpls0rTJUuu7_o_M5oKVVS_swJ6F&export=download&authuser=0&confirm=t&uuid=0de583cc-8a56-483a-945a-e6700d09a222&at=AN8xHooM13VOLH9Lkt0FLYATLqSs:1758104217790'
            },
            {
                id: 'or-2023-spring-mid1',
                title: 'Operation Research Mid 1 2023',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1haADf5op1fhL3WE2UwN8fBbqS91wXOZN&export=download&authuser=0&confirm=t&uuid=38d2e239-264e-4b10-90b6-5897fb21e000&at=AN8xHoqYOHbhDJmylhbg119HR0Mj:1758104221455'
            },
            {
                id: 'or-2024-spring-mid1',
                title: 'Operation Research Mid 1 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1T2ZeQZRbNxS7KSwyG5znpnWBV3Q5i_f9&export=download&authuser=0&confirm=t&uuid=3b6bae8a-5e9d-452c-9572-3c3cec844a4b&at=AN8xHoqKFEGpif2Fp3t71cFtfwKK:1758104225326'
            }
        ]
    }
},

'digital-logic-design': {
    title: 'Digital and Logic Design',
    description: 'Digital circuits, boolean algebra, combinational and sequential logic systems',
    icon: '🔌',
    papers: {
        mid1: [
            {
                id: 'dld-2019-spring-mid1',
                title: 'DLD Mid 1 2019 Spring',
                year: '2019',
                semester: 'Spring',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mLNNbHFFZpEkzLqWJhhMyQpt2CVHJJAe&export=download&authuser=0&confirm=t&uuid=33a82731-2415-4215-9bd5-fb0089803ab4&at=AN8xHooKyoHeK8X1qGyQl24X5WYA:1758103902397'
            },
            {
                id: 'dld-2022-spring-mid1',
                title: 'DLD Mid 1 2022 Spring',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1hmxsVWbX_D4LjjeO7syyy_iToIehPtBY&export=download&authuser=0&confirm=t&uuid=ed42f202-a768-49ea-9f61-b0b4a21b9693&at=AN8xHor5-xG4qEVSbNAgYcb1hB92:1758103907256'
            },
            {
                id: 'dld-2024-spring-mid1',
                title: 'DLD Mid 1 2024 Spring',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1V6l7Poj3oDX3boweT7B1N5jxY1UslUyF&export=download&authuser=0&confirm=t&uuid=d7ddc23a-cf81-4378-8700-7db5e8e86587&at=AN8xHoraHGAzF68_AulPORXcABKZ:1758103911618'
            },
            {
                id: 'dld-2025-spring-mid1',
                title: 'DLD Mid 1 2025 Spring',
                year: '2025',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mdnEE3BDeO1rGjirZwgdK5mCIdTN6WKf&export=download&authuser=0&confirm=t&uuid=c88033bc-9255-4dae-a745-8f7c5f501a2d&at=AN8xHop2vg_PAJxt-GbB-sqOsHeT:1758103915420'
            }
        ],
        mid2: [
            {
                id: 'dld-mid2-2022-fall',
                title: 'DLD Mid 2 2022',
                year: '2022',
                semester: 'Fall',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ndHoZXMq4TnYAxt3H_jzdewrmN5-V-a0&export=download&authuser=0&confirm=t&uuid=48d2b628-2547-4136-87f0-ac5023299e1a&at=ANTm3cx6sH9Jjvjem-4uWaHaU6t0:1769005748837'
            },
            {
                id: 'dld-mid2-2024-fall',
                title: 'DLD Mid 2 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Yfcacber_4LkPIzd97c_nI3XGXt3oks9&export=download&authuser=0&confirm=t&uuid=7b0eb012-e635-4372-bae5-f7fbc81fd930&at=ANTm3cxN-UULo1OEVzrbStBsVhD3:1769005753002'
            },
            {
                id: 'dld-mid2-2024-fall-solution',
                title: 'DLD Mid 2 2024 Solution',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1-IUv2vGiqHhuZZyoGxl48G8b1aiqmKTy&export=download&authuser=0&confirm=t&uuid=bf130978-f9c1-4ebe-af88-4ee1db31966b&at=ANTm3cyL93dBr80mFPWHg8FYAIac:1769005743830'
            }

        ],
        final: [    {
        id: 'dld-final-2020-fall',
        title: 'DLD Final 2020',
        year: '2020',
        semester: 'Fall',
        difficulty: 4.2,
        fileSize: '1.6 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=13Yxm9yRMLbNCQkwPa0Py5ydvbUCXG89J&export=download&authuser=0&confirm=t&uuid=4a4f1ff8-322d-4497-b73f-55f1c7c25ae0&at=ANTm3cxEDtkt3rHuBjrUp82I5UzY:1769005672124'
    },
    {
        id: 'dld-final-2021-fall',
        title: 'DLD Final 2021',
        year: '2021',
        semester: 'Fall',
        fileSize: '1.8 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1g562HgKnUI2f6ImM2-znenDgQIeYHqP3&export=download&authuser=0&confirm=t&uuid=539f66f8-962c-463c-928f-fe64165d6481&at=ANTm3czjBXt_kQjYCMIDSKLgSFim:1769005694544'
    },
    {
        id: 'dld-final-2022-fall',
        title: 'DLD Final 2022',
        year: '2022',
        semester: 'Fall',
        fileSize: '1.5 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1U2xlPnLJ4pA5T0dQo0GhoOvXRCGCBIZH&export=download&authuser=0&confirm=t&uuid=e38543e1-d930-477f-be88-1b1165efef16&at=ANTm3cyDjVrJOjWf8WV5R8ITnhGN:1769005687202'
    },
    {
        id: 'dld-final-2024-fall',
        title: 'DLD Final 2024',
        year: '2024',
        semester: 'Fall',
        fileSize: '1.9 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1qBzO2hygzvxNTTMMkadPBpI8bTLsX13i&export=download&authuser=0&confirm=t&uuid=4d2145f9-2e78-4a77-aa8b-d313a4225fa8&at=ANTm3cxc90hPGnD1JBwNjJ44GnZj:1769005681912'
    }
]
    }
},
'computer-architecture': {
    name: 'Computer Architecture',
    papers: {
        mid1: [
            {
                id: 'ca-2017-spring-mid1',
                title: 'CA Mid 1 2017 Spring',
                year: '2017',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ih9vaXCt045SibTM7UXIcWoRYqAAZPPE&export=download&authuser=0&confirm=t&uuid=1b66b40d-1cbd-4554-8418-d48ed56fc965&at=AN8xHoozbDr-g5vTkaRQ7PKSB6gv:1758103690946'
            },
            {
                id: 'ca-2019-spring-mid1',
                title: 'CA Mid 1 2019 Spring',
                year: '2019',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_dvSxJSKPfMeGrS1xxnzx4sq8vHuLeK_&export=download&authuser=0&confirm=t&uuid=8187f8c5-3532-4bab-a0e6-1fd19042890f&at=AN8xHooStxfPqZ5Dk9q-NaKd2kdC:1758103696404'
            },
            {
                id: 'ca-2025-spring-mid1',
                title: 'CA Mid 1 2025 Spring',
                year: '2025',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1LvyZYIewiBU5lySQBo0VVYfWeX1eiQwI&export=download&authuser=0&confirm=t&uuid=0b225218-8857-4291-bbe8-dc791f279c68&at=AN8xHoqatpiciW4imQai7VuarKhi:1758103700733'
            }
        ]
    }
},

'compiler-construction': {
    name: 'Compiler Construction',
    papers: {
        mid1: [
            {
                id: 'cc-2018-spring-mid1-lhr',
                title: 'CC Mid 1 2018 Spring LHR',
                year: '2018',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1xjahak80HW9oA8RzjSsyXtEUHf_qNuDQ&export=download&authuser=0&confirm=t&uuid=35795d1f-d04e-42a3-b9f3-0a5c85329385&at=AN8xHorHz4CW0cfogxJs76JoRUKB:1758103780525'
            },
            {
                id: 'cc-2018-fall-mid1-lhr',
                title: 'CC Mid 1 2018 LHR',
                year: '2018',
                semester: 'Fall',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1KpBWTgZ1FM-6WC6PABsdRPu8FhuRXx0L&export=download&authuser=0&confirm=t&uuid=72b08dfe-6991-41d7-8959-a208bf3cff9f&at=AN8xHoqKpdqlhSW_DQ71lTDdXMZJ:1758103776106'
            },
            {
                id: 'cc-2020-spring-mid1-lhr',
                title: 'CC Mid 1 2020 LHR',
                year: '2020',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1EIqtCebfkJqBB6gWuVe_lDUNsUfhcaWu&export=download&authuser=0&confirm=t&uuid=609283c4-2c21-4511-b673-ad91b95b195f&at=AN8xHopB3FgCnA1unLoblTX6wmxY:1758103784609'
            },
            {
                id: 'cc-2023-spring-mid1-lhr',
                title: 'CC Mid 1 2023 LHR',
                year: '2023',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=12DF3DxRBA-YpP4VaiLK40mof35zOMtET&export=download&authuser=0&confirm=t&uuid=0be2431d-213e-4c6f-8455-77ba3b2e68c1&at=AN8xHooD7bQPoLRNOSUAlY5kDrRr:1758103787740'
            },
            {
                id: 'cc-2024-spring-mid1-lhr',
                title: 'CC Mid 1 2024 LHR',
                year: '2024',
                semester: 'Spring',
                fileSize: '—',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1oq2xIBORULHIMTE_ZZNi-66-q6OuqIMD&export=download&authuser=0&confirm=t&uuid=6dc182f4-f6ab-432d-97ce-c7603da71dba&at=AN8xHoqgrOCz4hPWCAa1xdQ7QfFv:1758103791278'
            }
        ]
    }
},
'applied-physics': {
    title: 'Applied Physics',
    description: 'Physics principles applied to engineering and computer science',
    icon: 'AP',
    papers: {
        mid1: [
            {
                id: 'ap-2024-mid1',
                title: 'AP Mid 1 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '2.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=10hwC4Km-9W2MwHM991GXG0k7VWi-d41a&export=download&authuser=0&confirm=t&uuid=ff7aa9f2-3a4d-4e88-8327-07c099a14a5e&at=AN8xHoqX9SxROtWYEF72ZaCQ1aqg:1758023737876'
            },
            {
                id: 'ap-2020-lhr-mid1',
                title: 'AP Mid 1 2020 LHR',
                year: '2020',
                semester: 'Spring',
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1RsiO8266gdvD-NuhAWgNz9DOrn5rNaEb&export=download&authuser=0&confirm=t&uuid=99c8179f-3187-49e0-b833-17c6c101c87e&at=AN8xHornp2S_SYu9N79NcrIssG9n:1758023735520'
            },
            {
                id: 'ap-2019-mid1',
                title: 'AP Mid 1 2019',
                year: '2019',
                semester: 'Fall',
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=14I8-fke_6PwT7DhFkMSg6vse_nSWaxrC&export=download&authuser=0&confirm=t&uuid=1ddab6ff-03a9-4be3-8443-36af68a9c31e&at=AN8xHorADq_SXnGvhxlQRfwLQPxM:1758023731246'
            },
            {
                id: 'ap-2018-mid1',
                title: 'AP Mid 1 2018',
                year: '2018',
                semester: 'Spring',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1A_tXw3TiFqBEIh39AyVxDSBFdVo0PpdS&export=download&authuser=0&confirm=t&uuid=08969d00-d2b9-4688-b958-fb52389f7d1d&at=AN8xHorunfwchcYmVViJfTj566f3:1758023728429'
            },
            {
                id: 'ap-2017-mid1',
                title: 'AP Mid 1 2017',
                year: '2017',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1j9dfsSTagNmLLT5eAJZmdjtd-60a2lHo&export=download&authuser=0&confirm=t&uuid=8743acf2-0e04-4248-b431-b1362a0bfed2&at=AN8xHora1uF0kRtjj_cW7BPeCFWS:1758023723139'
            }
        ],
        mid2: [
            {
                id: 'ap-2023-mid2',
                title: 'AP Mid 2 2023',
                year: '2023',
                semester: 'Spring',
                difficulty: 4.1,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1esykQ8gvhQKEkjRMcZj-KtEJSt5Gjoiq&export=download&authuser=0&confirm=t&uuid=dc6db2ae-552f-4e84-a83a-335cebf34d8a&at=AN8xHoqDKpM2FD0s9aOBlr_9eNqd:1758101065946'
            },
            {
                id: 'ap-2024-mid2-solution',
                title: 'AP Mid 2 2024 Solution',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QW10joIUFndDMZ2R_1BjkHv4CpL4sMll&export=download&authuser=0&confirm=t&uuid=81a41097-e7ad-4439-abc9-eb43b45d0c52&at=AN8xHorY4F45_to1vPOogyyz9W-i:1758101069228'
            },
            {
                id: 'ap-2024-mid2',
                title: 'AP Mid 2 2024',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.2,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=17dXD3anIxHYJW3ckabhYua7J6sBL_5j5&export=download&authuser=0&confirm=t&uuid=56534cd6-08cf-4ea2-a92b-94d98a4d3204&at=AN8xHorfovUM5alqDSnvYTJR0YMu:1758101072524'
            },
            {
                id: 'ap-2019-lhr-mid2',
                title: 'AP Mid 2 2019 (LHR)',
                year: '2019',
                semester: 'Fall',
                fileSize: '1.3 MB',
                difficulty: 4.5,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=19f0CMctcB3SRaixaLQMYDZjeR_fiPA3c&export=download&authuser=0&confirm=t&uuid=21843646-4f48-426f-909f-3b2cb657c942&at=AN8xHorQXHnZ71CLKh6_BspTHWyf:1758101075898'
            },
            {
                id: 'ap-2020-lhr-mid2',
                title: 'AP Mid 2 2020 (LHR)',
                year: '2020',
                semester: 'Spring',
                difficulty: 3.7,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Y-mI0_anT2Bd6g-z5bdpLmlt_izDmQQY&export=download&authuser=0&confirm=t&uuid=d0aeb019-3cef-4e15-a2c2-5ce991d57b60&at=AN8xHorHpFk1P31ZE2n0p0mi50Cs:1758101080103'
            },
             {
                id: 'ap-2023-lhr-mid2',
                title: 'AP Mid 2 2023 (LHR)',
                year: '2023',
                semester: 'Spring',
                difficulty: 3.9,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1iTZjND4EJmE3tUW3k0YoKm7yjnBePnU4&export=download&authuser=0&confirm=t&uuid=d0d2cedc-39dd-46d3-bb56-41ca4f03f77a&at=AKSUxGPxJP2vsbuE-zNGbt4U4mt7:1760110290687'
            },
             {
                id: 'ap-2022-isb-mid2',
                title: 'AP Mid 2 2022 ISB',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.9 MB',
                difficulty: 4.3,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1vLIdRQYRj_VRgAMZAacuNosFAEQ8lbg_&export=download&authuser=0&confirm=t&uuid=3b31da9c-9cc3-4e78-8c1c-e4b1a0f8219a&at=AKSUxGOKpVppwg9YPu7nj050P6WP:1760110283104'
            }
        ],
        final: [
             {
                id: 'ap-2025-lhr-final',
                title: 'AP Mid 2 2025 LHR',
                year: '2025',
                difficulty: 4.5,
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=11hgjaposTvrKZuLNwrG77_buezfBiXur&export=download&authuser=0&confirm=t&uuid=95a55c8a-642b-4a5b-9d13-078be0fcdc43&at=AKSUxGPL-XZ9Y6H6XmhXeR0U3aoW:1760110277854'
            },
            {
                id: 'ap-2020-final',
                title: 'AP Final 2020',
                year: '2020',
                difficulty: 4.3,
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1aVMFTf13wA2hzjSW68FrtNEK_aHmkTw2&export=download&authuser=0&confirm=t&uuid=dee859a2-60b5-4656-b975-146a545340a0&at=AN8xHoo4yVzy83rp6y8T0-D6GxSn:1758101088591'
            },
            {
                id: 'ap-2021-final',
                title: 'AP Final 2021',
                year: '2021',
                semester: 'Fall',
                difficulty: 4.1,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_rbIx5dRWi8Z8QWPyb3EwkN12vwQ5tTL&export=download&authuser=0&confirm=t&uuid=63947a0a-9773-4c80-a1e3-c3dfcf4dc857&at=AN8xHoo84b90ryuhdMfpIMvtqdzL:1758101094264'
            },
            {
                id: 'ap-2022-final',
                title: 'AP Final 2022',
                year: '2022',
                difficulty: 4.0,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1E_uhx4J9Lgn7Wyyg-nGKdCZpf-r5tdx5&export=download&authuser=0&confirm=t&uuid=acf8583d-de64-48dc-a02b-2b61aa71ed9a&at=AN8xHopXmNTsgp4a_on-irmrpKbr:1758101097948'
            },
            {
                id: 'ap-2023-final',
                title: 'AP Final 2023',
                year: '2023',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1MKDrgS2zwE-GARzuRvK4NhMgRfsZzvHE&export=download&authuser=0&confirm=t&uuid=c3ef2a83-b7ad-4fbb-bbe9-af4589288726&at=AN8xHoprJ4-P_r1Gf_n1ATHLhPtJ:1758101102416'
            }
        ],
        quiz: [ {
                id: 'ap-Notes',
                title: 'AP Notes',
                year: '2023',
                semester: 'Spring',
                fileSize: '30 MB',
                difficulty: 4.2,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1CrCx6Z09Nd5Df6T81N1oQop0gvd_R3ve&export=download&authuser=0&confirm=t&uuid=7231fb9b-9c80-4650-981b-00e1bcd45559&at=AKSUxGMYCWJB-KwGxrfARdnIFAq5:1760153167327'
            }]
    }
},

    'functional-english': {
        title: 'Functional English',
        description: 'English language skills for technical and professional communication',
        icon: 'FE',
        papers: {
            mid1: [
                {
                    id: 'fe-2023-mid1',
                    title: 'FE Mid 1 2023',
                    year: '2023',
                    semester: 'Spring',
                    fileSize: '1.8 MB',
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1tU7N7RIoOZwJPWGbxLNY22H-xUl4c5sU&export=download&authuser=0&confirm=t&uuid=02bbfbae-3527-44a8-9ba0-1ed8ff0b4d91&at=AN8xHopxbzAUmviC10rQ-q5iuYHy:1758036068365'
                },
                {
                    id: 'fe-2022-mid1',
                    title: 'FE Mid 1 2022',
                    year: '2022',
                    semester: 'Spring',
                    fileSize: '1.6 MB',
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1SAjeEMieLmEYcvCLgyXQePgfsoIX80ht&export=download&authuser=0&confirm=t&uuid=474c7043-228d-4112-adea-4b3280c56dd3&at=AN8xHoqls-4tiko4VNQTPPFt1uqZ:1758036062834'
                },
                {
                    id: 'fe-2020-mid1',
                    title: 'FE Mid 1 2020',
                    year: '2020',
                    semester: 'Fall',
                    fileSize: '1.5 MB',
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1xySByFrJu8-4fpthLTAElUnfSakU20CQ&export=download&authuser=0&confirm=t&uuid=0b1bd69d-9dd0-45ef-8838-3fe35d0e4f0d&at=AN8xHoooVtz8Xox4MSDoebU7Hhw6:1758036058029'
                }
            ],
            mid2: [
                {
                    id: 'fe-2019-mid2',
                    title: 'FE Mid 2 2019',
                    year: '2019',
                    semester: 'Fall',
                    fileSize: '1.5 MB',
                    difficulty: 4.1,
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1oD2aKTXCUN4pkdZimsUneODjubxkgnQm&export=download&authuser=0&confirm=t&uuid=c1bd260f-3e9e-49ca-91f5-44cc6ec546e3&at=AKSUxGNMbToVKY3h21_nEH03ZWCb:1760112276008'
                }, {
                    id: 'fe-2023-mid2',
                    title: 'FE Mid 2 2023 ISB',
                    year: '2023',
                    semester: 'Fall',
                    fileSize: '8 MB',
                    difficulty: 4.0,
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1KS1eCvgp58flHC27DRnRJ0U8o1eVEEu_&export=download&authuser=0&confirm=t&uuid=4cd628a5-1048-4a7e-a39f-14a6138afdf5&at=AKSUxGPXcHD5GVsXLH8TZtkCKsJQ:1760760324047'
                }
            ],
            final: [
                {
                    id: 'fe-2021-final',
                    title: 'FE Final 2021',
                    year: '2021',
                    difficulty: 4.2,
                    semester: 'Fall',
                    fileSize: '1.5 MB',
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1hy8T9HQXFEXnPfG2H9N1V9DGDvNjEEEo&export=download&authuser=0&confirm=t&uuid=bf67c577-5fe7-43a2-ac55-e39e6033a75c&at=AKSUxGPzYsec6ef33pqElPI_gedj:1760112258613'
                },
                {
                    id: 'fe-2022-final',
                    title: 'FE Final 2022',
                    year: '2022',
                    difficulty: 4.0,
                    semester: 'Fall',
                    fileSize: '1.5 MB',
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=1r6oNocr2M1ZyQJdyR6CNbx7LAxyQY5Zg&export=download&authuser=0&confirm=t&uuid=5e9e6fad-63a9-4055-bf6c-c51a1e947c32&at=AKSUxGMTvj0WLuufyG_bw9YePxxa:1760112264701'
                },
                {
                    id: 'fe-2023-final',
                    title: 'FE Final 2023',
                    year: '2023',
                    difficulty: 4.1,
                    semester: 'Fall',
                    fileSize: '1.5 MB',
                    downloadUrl: 'https://drive.usercontent.google.com/download?id=16I6vYmO3yFD76dqIen9gc0sqR9K9nXsS&export=download&authuser=0&confirm=t&uuid=3be5d0d4-cbf6-47d0-91a2-daf5aa40983f&at=AKSUxGOrPYxIIA_WUEuTtw6yfnhO:1760112270083'
                }
            ],
            quiz: []
        }
    },
'data-structures-algorithms': {
    title: 'Data Structures & Algorithms',
    description: 'Advanced data structures and algorithmic problem solving techniques',
    icon: 'DSA',
    papers: {
        mid1: [
            {
                id: 'dsa-2024-mid1',
                title: 'DSA Mid 1 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '2.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Fm-mtPM88NcXvNaJ5NQown9MybD6FrGA&export=download&authuser=0&confirm=t&uuid=839f6fda-09b1-4f34-892c-77657e33dd5f&at=AN8xHooNOzb3UONr67ihTDildelZ:1758036119188'
            },
            {
                id: 'dsa-2022-mid1',
                title: 'DSA Mid 1 2022',
                year: '2022',
                semester: 'Fall',
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1YCIyYmTVsRcHeRJ1hXWBHYjydC_Oa1z-&export=download&authuser=0&confirm=t&uuid=6af0ff1c-e1dd-4562-9e5f-476815295ea5&at=AN8xHoqMRkK1yHl_yFtwRf-JHxtj:1758036114551'
            },
            {
                id: 'dsa-2021-mid1',
                title: 'DSA Mid 1 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mg-Kx-10jnSHbvCmohJGiuE9NH48qYK7&export=download&authuser=0&confirm=t&uuid=232d91aa-1b4b-4cff-aa8b-9593b8c86700&at=AN8xHopTGzi6F3D2OiczwWb0yMx1:1758036110822'
            },
            {
                id: 'dsa-2020-mid1',
                title: 'DSA Mid 1 2020',
                year: '2020',
                semester: 'Fall',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=15FafOGKIunwylQK3lq53MwhTMvgLR2FC&export=download&authuser=0&confirm=t&uuid=6054435b-e214-41b6-a0c3-185687edbe26&at=AN8xHorr8HhrQ_rSYicBJMr_UQqB:1758036106959'
            },
            {
                id: 'dsa-2019-mid1',
                title: 'DSA Mid 1 2019',
                year: '2019',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1r-JLsg6crV4CxxKrnMAFHR3yG5QcFSTG&export=download&authuser=0&confirm=t&uuid=11bc5788-238c-4437-8322-14254e80bc74&at=AN8xHoqeRZjfQEsrzJhwyR_EeZLq:1758036102653'
            },
            {
                id: 'dsa-2018-mid1',
                title: 'DSA Mid 1 2018',
                year: '2018',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Z__ZGAnUjxRDEwNbtU3yFFwdrceC1Mmh&export=download&authuser=0&confirm=t&uuid=399b7a23-5664-441b-8a14-f36b2648f8ae&at=AN8xHoqJPzniJvjcmgmdmcXmGRrk:1758036098524'
            }
        ],
        mid2: [
            {
                id: 'dsa-2024-mid2',
                title: 'DSA Mid 2 2024',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.6,
                fileSize: '2.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1exkA5GMkdkYHdvyJux4IrdyfX7WkdDhR&export=download&authuser=0&confirm=t&uuid=3a6a4f9d-f26c-462d-8b38-dfac0b01fee5&at=AN8xHoqywi3jLOm9a-ISg4OzN7ji:1758132876207'
            },
            {
                id: 'dsa-2021-mid2',
                title: 'DSA Mid 2 2021',
                year: '2021',
                semester: 'Spring',
                difficulty: 3.9,
                fileSize: '2.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1G60_Qd4lWceu3wJuL89cFg_EMwhqEXcC&export=download&authuser=0&confirm=t&uuid=3f99978f-fc68-4572-a667-97044e174abc&at=AN8xHoppJDnN1kOv4e7hAA68kdT6:1758132874482'
            },
            {
                id: 'dsa-2020-mid2',
                title: 'DSA Mid 2 2020',
                year: '2020',
                semester: 'Fall',
                difficulty: 4.1,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=13QEQBK-9dtEb75bON8Ubo_owGxlZrbcS&export=download&authuser=0&confirm=t&uuid=1eec1c79-46d5-44d6-abed-906f9a4242f0&at=AN8xHopxDS-F-krTaI-NktdNvVLr:1758132841626'
            },
            {
                id: 'dsa-2019-mid2',
                title: 'DSA Mid 2 2019',
                year: '2019',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mLyyMthISyw3XDd74aRlQyxkctyqXdQu&export=download&authuser=0&confirm=t&uuid=a3cf327f-84f7-4edd-ad08-dd06fb798c31&at=AN8xHoqceob9BU5-EdcV4ReSS7vN:1758132839567'
            },
            {
                id: 'dsa-2018-mid2',
                title: 'DSA Mid 2 2018',
                year: '2018',
                difficulty: 4.4,
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1q8wFS5VrnTHy2cHmnSv_z7904DEsQNy9&export=download&authuser=0&confirm=t&uuid=e29e087f-36a5-4d66-9bc4-45add77d9a1f&at=AN8xHoobsLoBl0MilH2gBzlbZWBB:1758132836771'
            }
        ],
        final: [
            {
                id: 'dsa-2024-final',
                title: 'DSA Final 2024',
                year: '2024',
                difficulty: 4.5,
                semester: 'Spring',
                fileSize: '2.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1cGsTLm4pJChiISF-ziXHyce0cNq40KXE&export=download&authuser=0&confirm=t&uuid=8be04e25-eb6c-4438-b3ae-fe69ad5f63cb&at=AN8xHor1wJeIZnc9Ux5Geokw46k5:1758132834596'
            },
            {
                id: 'dsa-2023-final',
                title: 'DSA Final 2023',
                year: '2023',
                difficulty: 3.5,
                semester: 'Fall',
                fileSize: '2.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1pjEm3z1eyuo_qRxrwkjFoDuifP4LJ7zT&export=download&authuser=0&confirm=t&uuid=493d2321-0642-4aa6-8f9b-7b27e5b18422&at=AN8xHoq6JkDdbDv2waJF94jhEFQW:1758132829405'
            },
            {
                id: 'dsa-2021-final',
                title: 'DSA Final 2021',
                year: '2021',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=17mMRF0UfRWmfq9E3yNDr4KO-ETgA_VxJ&export=download&authuser=0&confirm=t&uuid=a9b2f23d-9785-4a78-be8c-7affe0a1446e&at=AN8xHoo-S4V3nVakpRe07-tcgKLj:1758132824767'
            },
            {
                id: 'dsa-2020-final',
                title: 'DSA Final 2020',
                year: '2020',
                semester: 'Fall',
                difficulty: 3.7,
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ShXNEjuDl9JYaFzNK1SSMjU843IHV2q0&export=download&authuser=0&confirm=t&uuid=4ec4cd78-d143-49b5-b0fa-f8e6d228cc98&at=AN8xHopQBuPxY4fCNrSOvH9yTsP0:1758132819515'
            },
            {
                id: 'dsa-2019-final',
                title: 'DSA Final 2019',
                year: '2019',
                semester: 'Spring',
                difficulty: 4.1,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=109oAM0t_RJJQe5KbMFWEIy1yVGGCoe6J&export=download&authuser=0&confirm=t&uuid=5e132f05-5e39-47d3-bc06-22010385c945&at=AN8xHorG-aAV7wu8Bd7189gf3Tml:1758132815730'
            }
        ],
        quiz: []
    }
},
'calculus': {
    title: 'Calculus',
    description: 'Mathematical analysis including derivatives, integrals, and applications',
    icon: 'CAL',
    papers: {
        mid1: [
            {
                id: 'cal-2023-spring-mid1',
                title: 'Cal Mid 1 2023 Spring',
                year: '2023',
                semester: 'Spring',
                fileSize: '2.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1DfPyibO-g_SWZ7rg9IoPTV-tq1x1TKGK&export=download&authuser=0&confirm=t&uuid=b517aead-d07c-4fb5-b5a9-fcc1574bc1ad&at=AN8xHooScqcaMF_WXR6XUMrOcy8n:1758023617886'
            },
            {
                id: 'cal-2023-fall-mid1',
                title: 'Cal Mid 1 2023 Fall',
                year: '2023',
                semester: 'Fall',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ZOTywBpzDUl3zc-8_aR_um2UVfzFu2bP&export=download&authuser=0&confirm=t&uuid=e54a5aba-9c2c-4b0e-9e75-d30bde050279&at=AN8xHoogNntLdFeWjQViewlL0Ev7:1758023615963'
            },
            {
                id: 'cal-2022-mid1',
                title: 'Cal Mid 1 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_flzO9JHZjw5ZoPlcq2IyC-HetvnxV3i&export=download&authuser=0&confirm=t&uuid=82f5150f-06ff-4ee9-a47e-176afb29c1bc&at=AN8xHorzi51E-QhhoHi-HZwHCPWQ:1758023605068'
            },
            {
                id: 'cal-2021-mid1',
                title: 'Cal Mid 1 2021',
                year: '2021',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Rjy8mWW42lD8VD7JcoRwFbH-XeGx7jP7&export=download&authuser=0&confirm=t&uuid=16d28462-2cce-4a7f-997e-2c21084be9cd&at=AN8xHooDfItJz73m3cuz2tYAAfbh:1758023598094'
            }
        ],
        mid2: [
            {
                id: 'cal-2022-mid2',
                title: 'Cal Mid 2 2022',
                year: '2022',
                semester: 'Spring',
                difficulty: 3.9,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1kdcUWZP2sAhO66lXijKV2XEnQyXd74Ta&export=download&authuser=0&confirm=t&uuid=38eddaa4-8670-40d2-81b7-9eac53eb7569&at=AN8xHooHR0IZLuUMJ2Uk1biWGQQr:1758101444531'
            },
            {
                id: 'cal-2023-mid2',
                title: 'Cal Mid 2 2023',
                year: '2023',
                semester: 'Spring',
                difficulty: 3.5,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Ba3XV5C-Hcj__HM_F01BeTalT4PJ5Xz4&export=download&authuser=0&confirm=t&uuid=91060907-40d0-442c-ad3c-20b0c9e2a0c7&at=AN8xHooPW1Lo0m06Dfy89vYrF4Mh:1758101449133'
            },
            {
                id: 'cal-2024-mid2',
                title: 'Cal Mid 2 2024',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.8,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ojjnuhpb9DrrXhRGZNhYw0h0v3KaqKlQ&export=download&authuser=0&confirm=t&uuid=85fdb342-d2b5-4ba2-adc4-27c181738592&at=AN8xHoru6feyX0dA3uLCwju5kf7I:1758101452757'
            },
              {
                id: 'cal-2024-mid2-ISB',
                title: 'Cal Mid 2 2023 ISB',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.8,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1KFsdBL-ubLdzGzan6QyqiKCZIyDL92U0&export=download&authuser=0&confirm=t&uuid=306e371b-2118-4a62-82de-47451bd780c0&at=AKSUxGO3ksbiZsMByzceTDaTWeDh:1760109572563'
            },
              {
                id: 'cal-2023-mid2-LHR',
                title: 'Cal Mid 2 2023 LHR',
                year: '2023',
                semester: 'Spring',
                difficulty: 4.2,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1iE4qag5XIIbIaQohAh6g-ElRlNmsU70e&export=download&authuser=0&confirm=t&uuid=ec2bfe47-4bbb-4e97-aae8-ca6bfcf48ed2&at=AKSUxGNqC7MPYqBnZVI4kwoedVhK:1760109696281'
            }
            
        ],
        final: [
            {
                id: 'cal-2021-final',
                title: 'Cal Final 2021',
                year: '2021',
                difficulty: 3.9,
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1N6vu1YPBYn8bC4i_quyo7I5Ks6cUDotz&export=download&authuser=0&confirm=t&uuid=e85d2fd4-c4ee-417f-a19b-d25f4665a519&at=AN8xHopX2o5J7ggE9ArNjG8zm0NG:1758101460356'
            },
            {
                id: 'cal-2022-final',
                title: 'Cal Final 2022',
                year: '2022',
                difficulty: 4.3,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Uok9nj_4jKT3nN3g2FUxwLkRutVKta1i&export=download&authuser=0&confirm=t&uuid=67edaf11-151a-4921-9e02-0e6b32dd75b0&at=AN8xHor1F0D67npMXcmZTDy-7aXF:1758101464190'
            },
            {
                id: 'cal-2023-final',
                title: 'Cal Final 2023',
                year: '2023',
                semester: 'Spring',
                difficulty: 4.8,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1CW8tCQ2TkRX-bgTdHg_RqhzJ2RnJGAPo&export=download&authuser=0&confirm=t&uuid=41d37a28-0290-4380-8a89-6b78740d0dde&at=AN8xHooOP90GL4csayrQzEduyl1A:1758101470112'
            },
            {
                id: 'cal-2024-final',
                title: 'Cal Final 2024',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1RjbZOULBi65d2TnIzvFJ0TYdz3WI6e-a&export=download&authuser=0&confirm=t&uuid=b6e1a427-fe24-4b00-8894-bf5540bec22a&at=AN8xHoogZ9mAP0laSSzay3sLVh2F:1758101474325'
            },
             {
                id: 'cal-2022-final-ISB',
                title: 'Cal Final 2022 ISB',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.8,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=14OEHHaFoZQawjkO6DND5DncVSkwK14me&export=download&authuser=0&confirm=t&uuid=02f71897-3877-4d3b-9ec2-7836b98a30b6&at=AKSUxGMYwjpQr72X_qw_nbHn3CTL:1760109807569'
            },
             {
                id: 'cal-2023-final-LHR',
                title: 'Cal Final 2023 LHR',
                year: '2023',
                semester: 'Spring',
                difficulty: 3.7,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1MKC619VY-otftxU2x2y_5smQg_aoW74E&export=download&authuser=0&confirm=t&uuid=74134584-44d6-441f-9430-5227ca2fed95&at=AKSUxGP4qhMNZD_EQBYQtXerfZ57:1760109809046'
            }
        ],
        quiz: [
            {
                id: 'cal-NOtes',
                title: 'Cal Notes',
                year: '2023',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '50 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1k6P81oz6OEHCOM7XDq63etts93aDHT7a&export=download&authuser=0&confirm=t&uuid=3581f3a3-7ae9-4d28-8183-6a91eefd041a&at=AKSUxGNGbOw3ADdZdHwtu-i75LRZ:1760152994102'
            }

        ]
    }
},

'discrete-structures': {
    title: 'Discrete Structures',
    description: 'Mathematical structures for computer science including logic and graph theory',
    icon: 'DIS',
    papers: {
        mid1: [
            {
                id: 'ds-2024-spring-mid1',
                title: 'DS Mid 1 2024 Spring',
                year: '2024',
                semester: 'Spring',
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mveaoAExKd1Yy1Ef5hoc_ZV_LMybtHeY&export=download&authuser=0&confirm=t&uuid=c890050c-f9c4-44b2-9b2f-9c7af5fbac28&at=AN8xHoo-AsF5iHXXsBcuIgyQGpNl:1758036190053'
            },
            {
                id: 'ds-2024-fall-mid1',
                title: 'DS Mid 1 2024 Fall',
                year: '2024',
                semester: 'Fall',
                fileSize: '2.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ds6Zxl6k_HY3Qt7G-Y1jtjsVNiW3s2-U&export=download&authuser=0&confirm=t&uuid=10c46095-d7bd-4232-9258-7c6e3c9ba77b&at=AN8xHorFRd5cax6EpLf3Qma08JEB:1758036185625'
            },
            {
                id: 'ds-2022-mid1',
                title: 'DS Mid 1 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=12n6lwAqfMWLc_6QMCjEqeGCflo3bWh07&export=download&authuser=0&confirm=t&uuid=4a10c7e5-4ca6-4e42-80d6-b8a488a213a4&at=AN8xHoorQFAEsgLT1JPYxnTeDpTc:1758036176690'
            },
            {
                id: 'ds-2021-spring-mid1',
                title: 'DS Mid 1 2021 Spring',
                year: '2021',
                semester: 'Spring',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1WeY37LoEJWsxAr4tfCWm_6ACjCGlt3Gy&export=download&authuser=0&confirm=t&uuid=c01c1e77-e99a-4c0e-abf0-42871028832b&at=AN8xHopphZ20tdxfusg0lL1Tebrh:1758036169620'
            },
            {
                id: 'ds-2021-fall-mid1',
                title: 'DS Mid 1 2021 Fall',
                year: '2021',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1evDfjm0NxDfGPTmRfoxMzsqKtkeuu3-l&export=download&authuser=0&confirm=t&uuid=db50cbf1-c2aa-4e12-8695-8354715d57a1&at=AN8xHoqqnKgCWE9JoSezc4oJ6fQz:1758036165592'
            },
            {
                id: 'ds-2020-mid1',
                title: 'DS Mid 1 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1RlRGpf5eM8sNuqDi59dEJxfWSFeaacAe&export=download&authuser=0&confirm=t&uuid=f76061cd-4a31-43fa-957f-46474321646f&at=AN8xHorRlUksYzv1MryyOTyuPrNo:1758036161061'
            },
            {
                id: 'ds-2017-mid1',
                title: 'DS Mid 1 2017',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QK6aCp4kzxwMr2qb09sOYOlCUuraG8U-&export=download&authuser=0&confirm=t&uuid=1adbd83f-cfb8-423d-a49d-ff7a6df566f7&at=AN8xHoqTxyel9hjl0Z_OhqhA7Xei:1758036155248'
            },
            {
                id: 'ds-2016-mid1',
                title: 'DS Mid 1 2016',
                year: '2016',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1b1LIXnG6HWcaDDmGz8ZLlvccKJXZ7bxj&export=download&authuser=0&confirm=t&uuid=02d8303b-f2b4-4b8e-9e60-96f4cb8f8914&at=AN8xHooESbrqdwHOe4HuNwqj5x1b:1758036149694'
            }
        ],
        mid2: [
            {
                id: 'ds-2024-fall-mid2',
                title: 'DS Mid 2 2024 Fall',
                year: '2024',
                semester: 'Fall',
                difficulty: 4.4,
                fileSize: '2.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QTx_DLHNEZ6NFnbFZ0rmp-PRlUxc8yWH&export=download&authuser=0&confirm=t&uuid=7c3a10a5-b4df-4aa1-9f84-bbfe2cc23822&at=AN8xHooQwEsCyI1SZlteSGcYkXrp:1758217221702'
            },
            {
                id: 'ds-2022-mid2',
                title: 'DS Mid 2 2022',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.1,
                fileSize: '2.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_9R38a3Kfods5YT8NT5us3fk5IjMNbbx&export=download&authuser=0&confirm=t&uuid=08ce2f0c-fe1b-489d-bdc9-ade50f235b44&at=AN8xHooTa4_8sFggbujLa-T0NF9q:1758217217070'
            },
            {
                id: 'ds-2021-mid2',
                title: 'DS Mid 2 2021',
                year: '2021',
                semester: 'Fall',
                difficulty: 4.3,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1jP8zM0B9gsjBDq9wjicOa48RqRx3aWiZ&export=download&authuser=0&confirm=t&uuid=cd41a4a2-aa47-4926-ac0f-5eb3f19adfd3&at=AN8xHoqLdEjsOHEd-jqr2EOrne4B:1758217212380'
            },
            {
                id: 'ds-2019-mid2',
                title: 'DS Mid 2 2019',
                year: '2019',
                semester: 'Fall',
                difficulty: 4.6,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1nq2NbmTexTtkqnp5MQDw0h6ZvIaGoQ97&export=download&authuser=0&confirm=t&uuid=94755211-92f1-4080-b1d3-a752263f1f73&at=AN8xHopPJ7bn7z_ysHVzu2E0BmcU:1758217207768'
            },
            {
                id: 'ds-2019-spring-mid2',
                title: 'DS Mid 2 2019 Spring',
                year: '2019',
                semester: 'Spring',
                difficulty: 3.9,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=10UhAnj_N5TkazgT4kD9NrEHTU0Nf9vQu&export=download&authuser=0&confirm=t&uuid=aea1a274-44ac-4613-b7ca-0a304e54b507&at=AN8xHooW_sslC87spY3GtYpw3A7J:1758217203272'
            },
            {
                id: 'ds-2022-spring-mid2',
                title: 'DS Mid 2 2022 LHR',
                year: '2022',
                semester: 'Spring',
                difficulty: 3.5,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1eYvLgPee2SgrAiUAvjDpkH01jzSERnWl&export=download&authuser=0&confirm=t&uuid=46618f8f-72eb-44f7-b8ec-1bcd834d355c&at=AKSUxGO23jAO2f3t2HI-3OAwqH1_:1760154106421'
            },
             {
                id: 'ds-2023-spring-mid2',
                title: 'DS Mid 2 2023 ISB',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.8 MB',
                difficulty: 4.8,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1uSMMVMk8bUr3ml5sV4Rinf7wpa-RP68p&export=download&authuser=0&confirm=t&uuid=52fdf4f3-c280-4282-af2b-e7f190af2d13&at=AKSUxGMYhquHVVNOcx1MUOJYWJEf:1760154109578'
            }
        ],
        final: [
            {
                id: 'ds-2024-final',
                title: 'DS Final 2024',
                year: '2024',
                semester: 'Fall',
                difficulty: 4.0,
                fileSize: '3.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QFdCpVAEkTEiD-9uprFjKEypAcbNZF1O&export=download&authuser=0&confirm=t&uuid=991f689c-4c3a-4795-95b0-dc90d85b3eb6&at=AN8xHop4Tzs3yktmopLDRofQ4l0M:1758217199628'
            },
            {
                id: 'ds-2023-spring-final',
                title: 'DS Final 2023 Spring',
                year: '2023',
                semester: 'Spring',
                difficulty: 4.2,
                fileSize: '2.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1IvwKs5ASfgnuBrw-1E5I4zpP0d4LrKb6&export=download&authuser=0&confirm=t&uuid=b76a8787-40df-4b7a-9dec-9005370f0b92&at=AN8xHopg0hBGpq6fSz-lKklVvkiY:1758217194339'
            },
            {
                id: 'ds-2023-fall-final',
                title: 'DS Final 2023 Fall',
                year: '2023',
                semester: 'Fall',
                difficulty: 4.5,
                fileSize: '2.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=11kfEtgF2NGkRpQz1CVlgqxhA854kYFLr&export=download&authuser=0&confirm=t&uuid=194b66ce-bd8f-4766-b8dd-4bd542cc6284&at=AN8xHoomy4V8eBdaXDWZrMaK9hIB:1758217188948'
            },
            {
                id: 'ds-2020-final',
                title: 'DS Final 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '2.5 MB',
                difficulty: 4.3,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_rVNkQyRXGnG6GSCKHOCa0A9rqBDx6NT&export=download&authuser=0&confirm=t&uuid=e9f69692-298d-4b02-bb4a-a780fea8eb51&at=AN8xHorEX4MH1qG15WBSPR73Ske7:1758217182942'
            },
            {
                id: 'ds-2019-final',
                title: 'DS Final 2019',
                year: '2019',
                semester: 'Fall',
                difficulty: 4.4,
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1feBhHT-QEPSGU5JwhycOO4Vm8JZM0gwQ&export=download&authuser=0&confirm=t&uuid=3fabfa69-919b-4cb6-a4b7-0a9b8c1312b8&at=AN8xHorwGEOE0GsOyRW-IxUxLqsN:1758217176949'
            },
            {
                id: 'ds-2018-final',
                title: 'DS Final 2018',
                year: '2018',
                semester: 'Fall',
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1L3F5DoBiD3EWl7lCJeHXxtAsdfOe1Re2&export=download&authuser=0&confirm=t&uuid=321338db-a088-44f6-b2bb-e2f974cf09ab&at=AKSUxGP4sUOvo04ebBOyuoJc3ZWE:1760153479320'
            },
            {
                id: 'ds-2024-final-LHR',
                title: 'DS Final 2024 LHR',
                year: '2024',
                semester: 'Fall',
                difficulty: 4.7,
                fileSize: '3.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1blr5b_K9jg5XKtozSd1sl8kkkaB3h9IN&export=download&authuser=0&confirm=t&uuid=b4c56bfb-50ca-434b-9ec9-65bd7f268c86&at=AKSUxGMbhBDwPL0l30G0Ia5CILCw:1760762327433'
            }
        ],
        quiz: [ {
                id: 'ds-notes',
                title: 'Discrete Notes',
                year: '2023',
                semester: 'Fall',
                difficulty: 4.2,
                fileSize: '30 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1INI98tqZiInfc3eBPjCR8HVt1PsCN3yY&export=download&authuser=0&confirm=t&uuid=19206417-0679-4643-b784-695ff1132e71&at=AKSUxGP3bHZaU4i9jOH8M4gP0drR:1760153720652'
            }]
    }
},
  'linear-algebra': {
    title: 'Linear Algebra',
    description: 'Vector spaces, matrices, and linear transformations for CS applications',
    icon: 'LA',
    papers: {
        mid1: [
            {
                id: 'la-2024-spring-mid1',
                title: 'LA Mid 1 2024 Spring',
                year: '2024',
                semester: 'Spring',
                fileSize: '2.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1HG73Exn3-55PIngu7oSu6ylBdFuUIc_Y&export=download&authuser=0&confirm=t&uuid=187e0dcc-5c78-46ec-929a-b6e1f6f2337f&at=AN8xHoqvUSVyUfEAb1vZoif-VZWm:1758036325570'
            },
            {
                id: 'la-2024-mid1',
                title: 'LA Mid 1 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1vpNtCRwELAeg24OdkMZybhrnVAFKwTyy&export=download&authuser=0&confirm=t&uuid=24bb8a16-a3e7-43df-b353-d44385104b8f&at=AN8xHoo2gBx2EwMDvb3y6kpXXBIn:1758036318934'
            },
            {
                id: 'la-2023-mid1',
                title: 'LA Mid 1 2023',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1BT2UxVNVW_q_pOAsjW7Rlz1yhon42o-X&export=download&authuser=0&confirm=t&uuid=c82702db-552d-4102-8bb5-e82813690e56&at=AN8xHorjmvNravPcGJZAwbFOd0wg:1758036284317'
            },
            {
                id: 'la-2022-spring-mid1',
                title: 'LA Mid 1 2022 Spring',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1h8J02iQF8UQFBvBPJbo3iipSnlwUgFsI&export=download&authuser=0&confirm=t&uuid=8abf4638-46b0-430f-ac92-b0ec4cca3ded&at=AN8xHop5rxuZhpKl84rgFQrgu2-r:1758036279013'
            },
            {
                id: 'la-2022-fall-mid1',
                title: 'LA Mid 1 2022 Fall',
                year: '2022',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=11h8F3KKW_YzqPgPDcHu_BSUyULWaMoG2&export=download&authuser=0&confirm=t&uuid=5df26ae8-725d-47df-87d0-02b3302b20a6&at=AN8xHorXwIaASljtbnExI6pUwDaJ:1758036234995'
            }
        ],
        mid2: [
            {
                id: 'la-2022-mid2',
                title: 'LA Mid 2 2022',
                year: '2022',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1aL_ccvZmtbG_WlsHXYLWH2evGyXbINfJ&export=download&authuser=0&confirm=t&uuid=7b25403d-c718-4ed1-868b-9462b3057665&at=AN8xHorYZEm-NvSuOGh6aUCLUWrm:1758216620689'
            },
            {
                id: 'la-2022-mid2-lhr',
                title: 'LA Mid 2 2022 LHR',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1P9eP2uQwwZXISdUJ7TyclNUDqMYfZDH1&export=download&authuser=0&confirm=t&uuid=887646a0-0ee2-4fd8-8fda-bed1f20cfc10&at=AN8xHorvrZRU0D4D21fK9fAr_-Mt:1758216611732'
            },
            {
                id: 'la-2019-mid2-lhr',
                title: 'LA Mid 2 2019 LHR',
                year: '2019',
                semester: 'Fall',
                difficulty: 3.8,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1tu1q8UVLjNvm8HLRGtf80XZk1NgRbmPL&export=download&authuser=0&confirm=t&uuid=3d13d708-1109-40d9-83f1-ccc890727b88&at=AN8xHooQNLWIrJMA-fTQxHqSOqxs:1758216606467'
            },
            {
                id: 'la-2016-mid2-lhr',
                title: 'LA Mid 2 2016 LHR',
                year: '2016',
                semester: 'Fall',
                difficulty: 4.4,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1FJaM3MpqZ8JIRBLI7hliQlBexNeDXswa&export=download&authuser=0&confirm=t&uuid=45039f24-bfd2-450e-8d04-109b7b3842fc&at=AN8xHooq8kxyvMWhr1JPizxsRjYU:1758216601956'
            },
            {
                id: 'la-2015-mid2-lhr',
                title: 'LA Mid 2 2015 LHR',
                year: '2015',
                semester: 'Fall',
                difficulty: 4.5,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1yhdBRDs2GKRDfurS0rBOXFiZbnYUCKdP&export=download&authuser=0&confirm=t&uuid=f4a7ef1f-bcbe-421f-bc10-2f792a567556&at=AN8xHooEypoIc7RahYmquSV5RbY2:1758216597202'
            },
            {
                id: 'la-2014-mid2-lhr',
                title: 'LA Mid 2 2014 LHR',
                year: '2014',
                semester: 'Fall',
                difficulty: 3.2,
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1fsu3dNpVS8ThBzTett6Xs1qe9e9L0qyl&export=download&authuser=0&confirm=t&uuid=ac96621e-6b7e-4711-aeda-ac7f9a332836&at=AN8xHoo3swUp05-SCQDyrB60cvks:1758216593071'
            },
             {
                id: 'la-2022-mid2-Isb',
                title: 'LA Mid 2 2022 ISB',
                year: '2022',
                difficulty: 4.8,
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1O6jCRFN6_3coi3FH1kDwcc83K99AQ3-o&export=download&authuser=0&confirm=t&uuid=f86fc8b4-8561-4dcb-a838-d9c371f74784&at=AKSUxGNFI7mfJ5BIjcl3Hev54fvs:1760154782064'
            }
        ],
        final: [
            {
                id: 'la-2024-final',
                title: 'LA Final 2024',
                year: '2024',
                semester: 'Fall',
                difficulty: 4.3,
                fileSize: '2.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1kZF2vtI7u_oHPvAj-YZ8Q0XzZfD_2jWn&export=download&authuser=0&confirm=t&uuid=701cf9b5-1340-48d2-a0aa-11a246c7fea3&at=AN8xHoolwZSBlIlo9zAJ4hn5Bfg8:1758216589770'
            },
            {
                id: 'la-2023-final',
                title: 'LA Final 2023',
                year: '2023',
                difficulty: 4.5,
                semester: 'Spring',
                fileSize: '2.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1komSByoDrBF9f8aauqe66gw4xALjEnA1&export=download&authuser=0&confirm=t&uuid=cadc5bc5-c4f2-43c7-8b37-8f326083c382&at=AN8xHorIZTMZqi1q9HBCkXS_mN8M:1758216585793'
            },
            {
                id: 'la-2022-final',
                title: 'LA Final 2022',
                year: '2022',
                difficulty: 4.0,
                semester: 'Spring',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1vdhZ-UlU0d8NKwF86moeOwq308D2jvSu&export=download&authuser=0&confirm=t&uuid=91b86382-62d7-4915-9bc9-de91259dd584&at=AN8xHoqkZAUwyqEPb11YofbnIdCM:1758216581870'
            },
            {
                id: 'la-2021-final-lhr',
                title: 'LA Final 2021 LHR',
                year: '2021',
                difficulty: 4.1,
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1JvRaeW2K4EARJ9-_aDnXC_Yo_nY8XQ-l&export=download&authuser=0&confirm=t&uuid=f1e22159-da1b-48b6-b7a2-eeeaccfac97b&at=AN8xHooGh3jvIx1uZN4zRcTsRyns:1758216578271'
            },
            {
                id: 'la-2020-final',
                title: 'LA Final 2020',
                year: '2020',
                difficulty: 4.4,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=149avnR7CIU37m1XC5y0PFzxpEzq7bfpy&export=download&authuser=0&confirm=t&uuid=1ead7867-31f7-4746-824f-c1045a299a78&at=AN8xHoqQ1yOLk4o1hmWr182DmIOO:1758216574234'
            },
             {
                id: 'la-2010-final',
                title: 'LA Final 2010',
                year: '2010',
                difficulty: 3.7,
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1gnqEkSO05QdDYvcvCi9c9PpDnEe5LgyB&export=download&authuser=0&confirm=t&uuid=3a271b80-64f9-434d-af07-7819fe95cb23&at=AKSUxGNyksNYcOq_QU8Xdj1pCnSi:1760154697284'
            },
             {
                id: 'la-2015-final',
                title: 'LA Final 2015 LHR',
                year: '2015',
                difficulty: 4.0,
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QIEUVcRD_h0DeHDed78YpPQV-NTwQUhJ&export=download&authuser=0&confirm=t&uuid=aceb079f-1278-4daa-a42c-2bf2169faa80&at=AKSUxGNo_PiqCkS6qVc1gOl5LYI0:1760154702821'
            }
        ],
        quiz: [
             {
                id: 'la-Notes',
                title: 'Linear Algebra Notes',
                year: '2023',
                semester: 'Fall',
                fileSize: '80 MB',
                difficulty: 4.2,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=135pJTxs1CEX8nZYlgT0ugz75OWbFmEo-&export=download&authuser=0&confirm=t&uuid=b781d5a2-9396-4702-a8ff-2f90bcddc846&at=AKSUxGM8DU6sJE7SNkEwjWB05OD3:1760154745022'
            }
        ]
    }
},
'design-analysis-algorithms': {
    title: 'Design & Analysis of Algorithms',
    description: 'Covers algorithm design techniques, analysis of time and space complexity, and problem-solving strategies',
    icon: 'DAA',
    papers: {
        mid1: [
            { name: 'DAA Mid 1 2021', link: 'https://drive.usercontent.google.com/download?id=1thsV8NAoHR_KJ1-Jdzezmz70hKKXzLBN&export=download&authuser=0&confirm=t&uuid=3799f366-bc39-41c2-afce-e39b4a6dd5b6&at=AN8xHoqgmPElEboEQR2ReJRTW5Rp:1758102107570' },
            { name: 'DAA Mid 1 2020', link: 'https://drive.usercontent.google.com/download?id=19ml6TTw7QpklPeQwAAzw9VfnT28T7jMf&export=download&authuser=0&confirm=t&uuid=e4d27663-bfd0-43a5-8023-43408cc59d58&at=AN8xHorLRajtK2tP3KEYtM3qR_XS:1758102112379' },
            { name: 'DAA Mid 1 2019', link: 'https://drive.usercontent.google.com/download?id=16hcjrHdYVebu73IcT4jTUOAvC9MrQ2AF&export=download&authuser=0&confirm=t&uuid=dd7d0d3a-a03c-4eba-ae6e-27cef7daa1e0&at=AN8xHooFNvKfUWahrlZNFstUzZgm:1758102116908' },
            { name: 'DAA Mid 1 2018', link: 'https://drive.usercontent.google.com/download?id=1AZXYFyuyNI8Zqs76Jhea04io6ntULPx7&export=download&authuser=0&confirm=t&uuid=6c3717d8-3c3b-41ce-bb65-6cc164a8e507&at=AN8xHoovn7kpz2Lw7diYK1Z8tKeB:1758102120779' },
            { name: 'DAA Mid 1 2017', link: 'https://drive.usercontent.google.com/download?id=11hWK-D3v7Jk5WNHtCMjFTWHJ1LVnHGqb&export=download&authuser=0&confirm=t&uuid=1f3454bb-9425-4db3-9eb5-24977ba32ff4&at=AN8xHoqCMKUZ7-yqBacv83bvVUPN:1758102124481' },
            { name: 'DAA Mid 1 2017 Solution', link: 'https://drive.usercontent.google.com/download?id=1z35dAJ02MPlR9NqU6S_7QI9LttMdmQhC&export=download&authuser=0&confirm=t&uuid=bf26c92c-ddb8-4664-80db-cf659a48fd01&at=AN8xHoomPY720D4Cw7XiiA4gvamv:1758102128212' }
        ],
        mid2: [
  {
    id: "daa-mid2-2022",
    title: "DAA Mid 2 2022",
    year: "2022",
    filesize: "1.7 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1-4TmLR5voRyetWNS4NS9sGCycv8bgcAh&export=download&authuser=0&confirm=t&uuid=abd0dfc7-5038-45c8-921e-0c4bd2473d97&at=AKSUxGMvqgsJNgnhVMuWgBNQ7ibX:1760847287361"
  },
  {
    id: "daa-mid2-2021",
    title: "DAA Mid 2 2021",
    year: "2021",
    filesize: "1.4 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1qgIxO2y5_BiD9QLpwXjo4GfQbuzs2uBg&export=download&authuser=0&confirm=t&uuid=d6c3d492-04e2-4ad8-8728-a1fe7f988b05&at=AKSUxGNeEcX6ylzDNc0pIC285F54:1760847280764"
  },
  {
    id: "daa-mid2-2020",
    title: "DAA Mid 2 2020",
    year: "2020",
    filesize: "1.9 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1E90E5LLp93N7hXcMI-9_WWIY2hj_0U5n&export=download&authuser=0&confirm=t&uuid=ae065f08-06a1-4458-b6e3-37bdcea02c02&at=AKSUxGOSB7dCYzig7_wXmOZLGB_l:1760847274919"
  },
  {
    id: "daa-mid2-2019",
    title: "DAA Mid 2 2019",
    year: "2019",
    filesize: "1.3 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1PuM5HWZ8m32NrvG0JMCpZn2fDcE_vk4W&export=download&authuser=0&confirm=t&uuid=223fec36-0354-48d3-8dbc-1ae72913ab8c&at=AKSUxGP0z-p6adl_47omnyRbdngU:1760847269437"
  },
  {
    id: "daa-mid2-2018",
    title: "DAA Mid 2 2018",
    year: "2018",
    filesize: "1.6 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1q7SiSpIV8T7vdqSOz-VhdGSPNkFLwk-f&export=download&authuser=0&confirm=t&uuid=a538ae7d-8681-4b6f-836c-94f2f91a48b5&at=AKSUxGP5oHh2rG3YQKhYJjFBhkLz:1760847263351"
  },
  {
    id: "daa-mid2-2017",
    title: "DAA Mid 2 2017",
    year: "2017",
    filesize: "1.2 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1bRZRQ4rBxvcIeoGsnnupMLvOc_YYZhDk&export=download&authuser=0&confirm=t&uuid=1d50a949-e735-400d-bb9f-e0662e886fe7&at=AKSUxGP3eX-4w0f7CmZDQwGXzCq7:1760847257546"
  }
],
        final: [],
        quiz: []
    }
},
'theory-of-automata': {
    title: 'Theory of Automata',
    description: 'Formal languages, finite automata, and computational theory',
    icon: 'TOA',
    papers: {
        mid1: [
            {
                id: 'toa-2025-mid1',
                title: 'TOA Mid 1 2025',
                year: '2025',
                semester: 'Spring',
                fileSize: '2.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1-aWYLvcf7SDtJ2dPhTusNKkwoRUqj5il&export=download&authuser=0&confirm=t&uuid=0501c1a7-5fe5-4f60-92dc-5b712ebef13b&at=AN8xHorzLz0UeuIMuGssRosqBwho:1758036876248'
            },
            {
                id: 'toa-2024-mid1',
                title: 'TOA Mid 1 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '2.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1aoQj9fNduDy4SGN55vyyUUo1bcBitzjX&export=download&authuser=0&confirm=t&uuid=adcc46e4-e6af-4649-817f-36a20ee1c3f6&at=AN8xHooO_xJ_3DshRfq1inb1i1Rc:1758036388444'
            },
            {
                id: 'toa-2021-mid1',
                title: 'TOA Mid 1 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1692zQnqmrwsJKHdkWogUQFUdoXN3fggN&export=download&authuser=0&confirm=t&uuid=5a6e1fe3-429a-47f9-8ee4-441b42722833&at=AN8xHopg5sf1gxrfMXYTTh_2j5P_:1758036382248'
            },
            {
                id: 'toa-2019-mid1',
                title: 'TOA Mid 1 2019',
                year: '2019',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Y-T4gb9upOXo_Yhgj_xraUe1vYHjkX4S&export=download&authuser=0&confirm=t&uuid=10b3b2ef-5d16-43ad-af01-401176dececf&at=AN8xHoqh7InzMLoxLCdm5Roj7FgN:1758036363093'
            },
            {
                id: 'toa-2018-spring-mid1',
                title: 'TOA Mid 1 2018 Spring',
                year: '2018',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1e3W7rHaRC3o4MKGrJPcIlMeN8UU2TMuE&export=download&authuser=0&confirm=t&uuid=46f0af89-30bc-40ab-acef-5ee7b8f6151e&at=AN8xHor8YKzLUveTW8C624ub8Yhp:1758036357305'
            },
            {
                id: 'toa-2017-spring-mid1',
                title: 'TOA Mid 1 2017 Spring',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1gir5Su3GXcJeWVCntsn_PEFeDn8F-LyO&export=download&authuser=0&confirm=t&uuid=08882978-ba06-4467-bceb-10adae0c3e5f&at=AN8xHoondlaFiKgSRNImPSig21Ho:1758036352378'
            },
            {
                id: 'toa-2017-fall-mid1',
                title: 'TOA Mid 1 2017 Fall',
                year: '2017',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1WnS4SH_jbWb9u3_-GA_6d5_CVBlWL4Vu&export=download&authuser=0&confirm=t&uuid=39be82a0-d076-42a8-a27b-a5ee0ab025d7&at=AN8xHopTWVfWk5lr98PusnOGG4Au:1758036346694'
            }
        ],
        mid2: [
            {
                id: 'toa-2025-mid2',
                title: 'TOA Mid 2 2025',
                year: '2025',
                semester: 'Spring',
                fileSize: '1.9 MB',
                difficulty: 4.5,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1vRX9JONqnh6R2SZBe0dN2ha6Da7t0Ks1&export=download&authuser=0&confirm=t&uuid=8f16a3f9-5e51-4aec-a51a-74ba22f76f48&at=AN8xHopOq30cdhPTHk-873CokgMr:1758215908611'
            },
            {
                id: 'toa-2022-mid2',
                title: 'TOA Mid 2 2022',
                year: '2022',
                semester: 'Fall',
                difficulty: 4.0,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1iHYg8U3mvb7lNdn6zKnopIu2Ce_4-S-G&export=download&authuser=0&confirm=t&uuid=c456ee5c-1ce9-441b-8c56-a9c7979719ae&at=AN8xHopxiFlMTTgRjVOJhaFZP1Ni:1758215903624'
            },
            {
                id: 'toa-2021-mid2',
                title: 'TOA Mid 2 2021',
                year: '2021',
                difficulty: 4.3,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1js-il-U5UUeK2VIspqA_MWZSQO1P4IZR&export=download&authuser=0&confirm=t&uuid=5baa1036-7388-49bc-b88b-e660acd096ba&at=AN8xHoqnzyNxT-S34ZmwTAbstP37:1758215899031'
            },
            {
                id: 'toa-2021-mid2-sol',
                title: 'TOA Mid 2 2021 Solution',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Ry-mUuFddwBKNe6O6DMzeKij91j5t5Nu&export=download&authuser=0&confirm=t&uuid=2dfd0e7e-6c92-44a0-bc38-543be67d913c&at=AN8xHopZ01uwn5nxjBuThDA2aDGQ:1758215894225'
            },
            {
                id: 'toa-2018-mid2',
                title: 'TOA Mid 2 2018',
                year: '2018',
                semester: 'Spring',
                difficulty: 4.4,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=177pTQ4n4tFRCwE4iuWNnwqrgXGr8Neq6&export=download&authuser=0&confirm=t&uuid=18ecf244-ade1-4902-9d15-89da7c310389&at=AN8xHopPEdeloAayF_CnYckErshR:1758215889319'
            },
            {
                id: 'toa-2017-spring-mid2',
                title: 'TOA Mid 2 2017 Spring',
                year: '2017',
                semester: 'Spring',
                difficulty: 3.5,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Y60SOX9L2oQgrn-tSy7Evy-9CKRZZjEj&export=download&authuser=0&confirm=t&uuid=f3e32203-e40e-4435-a058-63396ea40d6e&at=AN8xHor77K1XhdWnOWeFwDqzFVDi:1758215884372'
            },
            {
                id: 'toa-2017-fall-mid2',
                title: 'TOA Mid 2 2017 Fall',
                year: '2017',
                semester: 'Fall',
                difficulty: 4.1,
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=11S1K0Mlci3UqD8fjFfVkbO73Z4BtLmkI&export=download&authuser=0&confirm=t&uuid=1b2f3d09-e064-466d-98f8-d68827d15ae0&at=AN8xHoqHPcSgnnEPcB5V7fJRqTmj:1758215879227'
            }
        ],
        final: [
            {
                id: 'toa-2024-final',
                title: 'TOA Final 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.9 MB',
                difficulty: 4.0,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1dyqoTOx20GUpB_l5LetzWMkTG99Gt7m6&export=download&authuser=0&confirm=t&uuid=0280588d-ea07-428b-b2bf-53d9d8cedd4c&at=AN8xHoommI2Y9Mn4ZOiD_fxG5cd9:1758215874447'
            },
            {
                id: 'toa-2023-final',
                title: 'TOA Final 2023',
                year: '2023',
                semester: 'Spring',
                difficulty: 4.6,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1yL708h_os0z6UQFRNndE96w1xJps7SMj&export=download&authuser=0&confirm=t&uuid=07abf794-3e4f-4d80-a7e9-3e4c3773c784&at=AN8xHooTXnI56SxlZqm0vJiz89DB:1758215869303'
            },
            {
                id: 'toa-2022-final',
                title: 'TOA Final 2022',
                year: '2022',
                semester: 'Fall',
                difficulty: 4.3,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_b68cqcNE-6eo1dxznvr465k_qGWIbKX&export=download&authuser=0&confirm=t&uuid=38ceecbb-f863-47c0-ab12-df9a7dcf1787&at=AN8xHoqzM2pOUtCaU3aZJOMysae3:1758215863974'
            },
            {
                id: 'toa-2021-final',
                title: 'TOA Final 2021',
                year: '2021',
                semester: 'Spring',
                difficulty: 3.8,
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1xxjKslhHlNTbFIuBPHNdM-ZZ_GDnl1Sf&export=download&authuser=0&confirm=t&uuid=a2a7e4c1-ba95-4a52-bc2a-fa42f91ae872&at=AN8xHopnN2C1sVe0rn9v7VcQ8zFz:1758215858456'
            },
            {
                id: 'toa-2020-final',
                title: 'TOA Final 2020',
                year: '2020',
                semester: 'Fall',
                difficulty: 4.1,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=18FZJluL4ijkQ7fMAPQhjVZ-Rehh2w8_n&export=download&authuser=0&confirm=t&uuid=15532ecf-66d2-49c2-a67d-cb2e7e2a38b8&at=AN8xHooh9m77D46uyLEOOw6qwX1t:1758215853684'
            },
            {
                id: 'toa-2018-final',
                title: 'TOA Final 2018',
                year: '2018',
                semester: 'Spring',
                difficulty: 4.4,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=13D_Or84JZQevagbeWTzkfa_Lsdfw6lO5&export=download&authuser=0&confirm=t&uuid=245a87b6-832b-4273-92b7-e634b5851472&at=AN8xHoqCE9GHe4jf_knlYH0ku7e9:1758215848808'
            },
            {
                id: 'toa-2017-final',
                title: 'TOA Final 2017',
                year: '2017',
                semester: 'Fall',
                difficulty: 4.5,
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1tWg7pdec_TJ4WPctu97NZswiaswuDUTj&export=download&authuser=0&confirm=t&uuid=81d360b6-7f67-4bf5-bae4-655ed1c162a8&at=AN8xHopqmrpzeHJFB2_0JkbblDdS:1758215844117'
            }
        ],
        quiz: []
    }
},


'programming-fundamentals-lab': {
    title: 'Programming Fundamentals Lab',
    description: 'Hands-on programming practice with C++ implementation and lab exercises',
    icon: 'PFL',
    papers: {
        mid1: [
            {
                id: 'pf-lab-2024-mid1a',
                title: 'PF Lab Mid 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.4 MB',
              difficulty: 4.3,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1sq5Kzq2Lwy1M40dmXCIya_edPU-LgH3B&export=download&authuser=0&confirm=t&uuid=0182d1e1-500e-4a12-a86c-a82430c8014d&at=AN8xHoo5cR0166qgN1Cfktgnn4TV:1758175000819'
            },
            {
                id: 'pf-lab-2024-mid1b',
                title: 'PF Lab Mid 2024 Paper B',
                year: '2024',
                semester: 'Spring',
              difficulty: 4.6,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1bbc4juBUmYsGZjdGX1eMneiWwmKtozvH&export=download&authuser=0&confirm=t&uuid=ebf8aa2b-5452-428d-a63c-67ee90363d8b&at=AN8xHooDv2w53CqxINafD-PFyOFJ:1758175004360'
            },
            {
                id: 'pf-lab-2023-mid1',
                title: 'PF Lab Mid 2023',
                year: '2023',
                semester: 'Spring',
              difficulty: 4.5,
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1wtBn6nWaRdxyyaQZbR2DuJExz_ub5o5d&export=download&authuser=0&confirm=t&uuid=b20ea3ab-9141-44c0-8793-8d9a65c7db79&at=AN8xHorAz86GMwrWcVDzOsGH0XQt:1758174996924'
            },
            {
                id: 'pf-lab-2022-mid1a',
                title: 'PF Lab Mid 2022 Paper A',
                year: '2022',
                semester: 'Spring',
              difficulty: 4.1,
                fileSize: '1.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1oT8Pa6j0BdanIy1D6Ran1Bs6MNSoFb4p&export=download&authuser=0&confirm=t&uuid=96057c31-4b3d-4f29-b8a0-e88b1166dd5f&at=AN8xHopbSfa0OO1MpBCnmqJuaQlU:1758174972131'
            },
            {
                id: 'pf-lab-2022-mid1b',
                title: 'PF Lab Mid 2022 Paper B',
                year: '2022',
              difficulty: 3.7,
                semester: 'Spring',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1R--DXq2M01JbF_SAZFX1BTro1FsAMbv-&export=download&authuser=0&confirm=t&uuid=bad7d275-36c8-4103-8a50-7a9d76026fd6&at=AN8xHoo0pEpzD7y44PzWFzwcx51m:1758174989063'
            },
            {
                id: 'pf-lab-2022-mid1c',
                title: 'PF Lab Mid 2022 Paper C',
                year: '2022',
                semester: 'Spring',
              difficulty: 4.0,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1klSRLkKuQQflKm366MAhSDbB6OaCFt3K&export=download&authuser=0&confirm=t&uuid=8ccc956d-0feb-4940-abdb-486e04cdbe1c&at=AN8xHopF-ty9ZfljwAXDM13Y-Ook:1758174992836'
            },
            {
                id: 'pf-lab-2021-mid1',
                title: 'PF Lab Mid 2021',
                year: '2021',
                semester: 'Spring',
              difficulty: 3.4,
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QKCA7IwMJOoC2rIHCciC3fFG4K5SglML&export=download&authuser=0&confirm=t&uuid=f0d53015-3997-49b7-b961-f41742afb28b&at=AN8xHoqVMq8i2s55_74BiNHka9bQ:1758174968504'
            }
        ],
       
        final: [
            {
                id: 'pf-lab-2024-final',
                title: 'PF Lab Final 2024',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1qzE4cSTC_jAgnT5hmua8CLLFVSxBRSXr&export=download&authuser=0&confirm=t&uuid=6441a836-9fc5-4650-8caa-0e990a12dd7d&at=AN8xHoq5sFC_V--BMU-WCf5coMGE:1758175047296'
            },
            {
                id: 'pf-lab-2023-finalA',
                title: 'PF Lab Final 2023 Paper A',
                year: '2023',
                difficulty: 4.1,
                semester: 'Spring',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1SOrad1i4w3_vd60Y5eykzSAk5fnHY8bn&export=download&authuser=0&confirm=t&uuid=33144d6f-8434-43b5-bcd8-81421d1e9a9f&at=AN8xHorns8FOWaVaS994288W5SUr:1758175035432'
            },
            {
                id: 'pf-lab-2023-finalB',
                title: 'PF Lab Final 2023 Paper B',
                year: '2023',
                difficulty: 4.3,
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1h6S7DA5rbM_wzGLHAaQ7J61QhPVf6Hn-&export=download&authuser=0&confirm=t&uuid=0a325e69-a483-4389-ae29-f6c8e2660172&at=AN8xHooySxFpU0jSreDbJSf75r9Z:1758175039280'
            },
            {
                id: 'pf-lab-2023-finalC',
                title: 'PF Lab Final 2023 Paper C',
                year: '2023',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1llZdhglYGTO09aFBFOmQWYjPB8F2HsFZ&export=download&authuser=0&confirm=t&uuid=a844b9ad-c631-46c3-8157-7a89c4e93db8&at=AN8xHooh-EcNapy_LBGniCdKhyQ1:1758175042633'
            },
            {
                id: 'pf-lab-2021-final',
                title: 'PF Lab Final 2021',
                year: '2021',
                semester: 'Spring',
                difficulty: 4.4,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1CKO-4y6yRn1hjia2-o6oKNiglH2v1n5_&export=download&authuser=0&confirm=t&uuid=397658f9-5ef3-4682-b81d-97db830c3f08&at=AN8xHoreV4f3AVawEa8crTaf0U4O:1758175031831'
            },
            {
                id: 'pf-lab-2020-final',
                title: 'PF Lab Final 2020',
                year: '2020',
                difficulty: 4.0,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1y-AY1bFjCRuamIFC-SWh0WDnmthRwWxZ&export=download&authuser=0&confirm=t&uuid=3c47915e-7041-46e5-8686-0afb7600cc62&at=AN8xHooIEo_mPHjLrtok-lp_sFQ2:1758175022669'
            }
        ],
         quiz: [
              {
                id: 'pf-lab-2020-final',
                title: 'Arrays and Loop',
                year: '2025',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Z5viOgpVERgCRCyV34ie01-60FyADrgG&export=download&authuser=0&confirm=t&uuid=cf3865d7-15db-4dbb-8464-5b158d6ae51f&at=ALWLOp5bXcNzVDpg4IXcZj1JXda_:1764433558090'
            },
             {
                id: 'pf-lab-2020-final',
                title: 'Bitwise',
                year: '2025',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1LHEHQHovfN_Q4aCq6VX9hLRmnxPiDjD4&export=download&authuser=0&confirm=t&uuid=e044a295-be59-42d0-9c10-e5a83b75e945&at=ALWLOp7VI1KhQOLB2oAReMRxOEWp:1764433564848'
            }, {
                id: 'pf-lab-2020-final',
                title: 'Structure and Function',
                year: '2025',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1-YN5xkm8qZf5S9AypvklS7YO99zkM34K&export=download&authuser=0&confirm=t&uuid=f0698815-79a6-434d-aa17-fef542087118&at=ALWLOp787tmKTDJDi2qKHn4fy55e:1764433576039'
            }, {
                id: 'pf-lab-2020-final',
                title: 'DMA',
                year: '2025',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1OclrIEPbXaGzk3eYvuwv1NYBq0iGLHSc&export=download&authuser=0&confirm=t&uuid=8f9c515e-2a59-43b0-a359-667f6755c52a&at=ALWLOp4QYHOCDx8piBikdUch6Enr:1764433570763'
            }

         ]
    }
},

'information-communication-technology': {
    title: 'Information and Communication Technology',
    description: 'ICT fundamentals, digital literacy, and communication technologies',
    icon: 'ICT',
    papers: {
        mid1: [
            {
                id: 'ict-2024-mid1a',
                title: 'ICT Mid 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.3 MB',
              difficulty: 3.8,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1rJzWVNX8gqrkw0AA3ipRSDlPxXp-j5t8&export=download&authuser=0&confirm=t&uuid=6fdc9f22-07c6-4bf5-8a84-6b8c355815b8&at=AN8xHoqpzYwh1mNtGmdixQyEbiYN:1758175290426'
            },
            {
                id: 'ict-2024-mid1b',
                title: 'ICT Mid 2024 Paper B',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.8 MB',
              difficulty: 4.0,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1nGZqBk7MwoVhgJv9jzobSPxO5wQkNV_G&export=download&authuser=0&confirm=t&uuid=30db94f0-61dc-4b10-80bc-180895508986&at=AN8xHoowHS7F8xjH2k845tRYMYvm:1758175294663'
            },
            {
                id: 'ict-2023-mid1',
                title: 'ICT Mid 2023',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.1 MB',
              difficulty: 4.4,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1bKaOSDHVTMnkaodmlS2T2tITnWuA4nv7&export=download&authuser=0&confirm=t&uuid=5f39a414-3f07-40b5-ab0a-7565d5b56ad1&at=AN8xHoq_bjqsYfaWepZPWjoBrc0s:1758175287017'
            },
            {
                id: 'ict-2021-mid1',
                title: 'ICT Mid 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.6 MB',
              difficulty: 3.2,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=18lP9m6uA7JpK_rvkm9Wjqe-zA6kqhHUF&export=download&authuser=0&confirm=t&uuid=4aeb0b93-c4f9-4cf3-8801-196749f75524&at=AN8xHopLlYukfyMGy6ZCdSJ5qdBy:1758175283319'
            }
        ],
        mid2: [],
        final: [
            {
                id: 'ict-2024-finalA',
                title: 'ICT Final 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1WMUk8pKxFAKUdvVd2Bwxo5vuA9n308IN&export=download&authuser=0&confirm=t&uuid=cf71dd18-53d0-4456-a8bf-0d5da4f78c4d&at=AN8xHopxTtdkKbrzDfNE3iv7XDoo:1758175272626'
            },
            {
                id: 'ict-2024-finalB',
                title: 'ICT Final 2024 Paper B',
                year: '2024',
                difficulty: 4.5,
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mUA-U4nQqlVC6y6ZhZo3CcRUDTELkSr9&export=download&authuser=0&confirm=t&uuid=ede6d020-0fd5-48e2-8d79-625a73e53122&at=AN8xHoobpVLJjJcrvv1SWpgjDSUX:1758175276325'
            },
            {
                id: 'ict-2024-finalC',
                title: 'ICT Final 2024 Paper C',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1R8Va0Pitv1NLT8yg4Jxngd9oacAYkePw&export=download&authuser=0&confirm=t&uuid=be4a2209-a020-47be-bb7f-7c791d1bb917&at=AN8xHorMLEl7cMNBzzmvyI8AmdrJ:1758175279699'
            },
            {
                id: 'ict-2023-final',
                title: 'ICT Final 2023',
                year: '2023',
                semester: 'Spring',
                difficulty: 3.8,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1YJYeNiH8jcJt1PfVcMINV81fXLXQx3y1&export=download&authuser=0&confirm=t&uuid=aa27ea79-7d03-455e-970d-4f03000452b5&at=AN8xHoqAYa8eAsoxxzr_c38Jt0Tu:1758175260297'
            }
        ],
        quiz: []
    }
},


'oop-lab': {
    title: 'Object Oriented Programming Lab',
    description: 'Practical OOP implementation with hands-on coding exercises and projects',
    icon: 'OOL',
    papers: {
        mid1: [
            {
                id: 'oop-lab-2025-mid1a',
                title: 'OOP Lab Mid 2025 Paper A',
                year: '2025',
                semester: 'Spring',
                fileSize: '1.2 MB',
              difficulty: 4.6,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=194xCzZrMdllAKF8PMbaHRk1_9s2cTNQ6&export=download&authuser=0&confirm=t&uuid=78e9e3eb-ede3-4257-8e28-1f06d24956ea&at=AN8xHopnMzYduu-is2v3ra-oXl_I:1758175523825'
            },
            {
                id: 'oop-lab-2025-mid1b',
                title: 'OOP Lab Mid 2025 Paper B',
                year: '2025',
                semester: 'Spring',
                fileSize: '1.9 MB',
              difficulty: 4.7,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1l7R1I5E0P9eZWSNfa5didsmK8XfktpC4&export=download&authuser=0&confirm=t&uuid=53936326-44cf-4c5c-98e3-81c95ee8041c&at=AN8xHopMgbfnTstaGcmf86YH2X6m:1758175527645'
            },
            {
                id: 'oop-lab-2024-mid1a',
                title: 'OOP Lab Mid 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.6 MB',
              difficulty: 4.3,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ayPh3wUryz8cu8UOynd2woktqzAEz4Io&export=download&authuser=0&confirm=t&uuid=3afd4b94-bc3f-48ac-9c58-fb73e3ff515f&at=AN8xHopuUzVLcdKocpe6BPA0smDc:1758175516528'
            },
            {
                id: 'oop-lab-2024-mid1b',
                title: 'OOP Lab Mid 2024 Paper B',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.3 MB',
              difficulty: 4.4,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1krgHBXSOor-dhHPPZyqrOddKxTRlJpbF&export=download&authuser=0&confirm=t&uuid=aa6c6f6b-5715-4405-9bfd-3cc143ac110d&at=AN8xHooyK8qINuqjoWJKPjV_emMT:1758175519995'
            },
            {
                id: 'oop-lab-2022-mid1',
                title: 'OOP Lab Mid 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.1 MB',
              difficulty: 3.8,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1DxSdEBh3bPAAkuJM2sdSYTKkmtiuALFH&export=download&authuser=0&confirm=t&uuid=6fb33933-e21f-410e-a353-e6c60aec1959&at=AN8xHorQEmljDniA3ZpOYq22JIhH:1758175512862'
            },
            {
                id: 'oop-lab-2021-mid1',
                title: 'OOP Lab Mid 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.5 MB',
              difficulty: 3.4,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1RR3mJih4rpBRJHCx17_5rUzxkAwe-6qm&export=download&authuser=0&confirm=t&uuid=4b05ca6d-4705-4940-893c-8e5f2585b76a&at=AN8xHor452qkEV25Vss1CvSDwgSS:1758175509112'
            }
        ],
        mid2: [],
        final: [
            {
                id: 'oop-lab-2024-finalA',
                title: 'OOP Lab Final 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1u-HjkblQn6dNITPKTvWK2wndosno2reW&export=download&authuser=0&confirm=t&uuid=b8eaabe8-ed97-4358-87a8-c6b50fdcd4f1&at=AN8xHooN9OqHuMf7gtJy-eE9FMj9:1758175497954'
            },
            {
                id: 'oop-lab-2024-finalB',
                title: 'OOP Lab Final 2024 Paper B',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1PZLxw7n5yo7CPjkhjAeAqdzcz8aVF2Ms&export=download&authuser=0&confirm=t&uuid=e6fd84cb-5880-49f9-b45c-5c218a1d425a&at=AN8xHopIwI_9oPAoUWN_Dbi2o8QI:1758175501685'
            },
            {
                id: 'oop-lab-2024-finalC',
                title: 'OOP Lab Final 2024 Paper C',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1G7fsb-EC8lUS2A4IYXF3_6xqPihlIvGR&export=download&authuser=0&confirm=t&uuid=ba66e28a-a9a7-4a06-8490-38853163518b&at=AN8xHoot7DwdBgcKjcl-qJ_WQmTP:1758175505441'
            },
            {
                id: 'oop-lab-2021-final',
                title: 'OOP Lab Final 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1x0L3NG8lMWys9HzuGKN607g1maUIzwWb&export=download&authuser=0&confirm=t&uuid=0f7f3f43-4c69-46f6-aec2-e6957766ec51&at=AN8xHoou86lf1-hlSqpVvOHm-UZE:1758175494016'
            }
        ],
        quiz: []
    }
},

'coal-lab': {
    title: 'Computer Organization and Assembly Language Lab',
    description: 'Assembly language programming and computer organization practical exercises',
    icon: 'COL',
    papers: {
        mid1: [
            {
                id: 'coal-lab-2024-mid1a',
                title: 'COAL Lab Mid 2024 Paper A',
                year: '2024',
                semester: 'Spring',
              difficulty: 4.1,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1eM47TJLGD9o2TzrIqHD6_9aRQF5BaUI1&export=download&authuser=0&confirm=t&uuid=90487762-be8e-42df-bd25-72c3d873f1ee&at=AN8xHopU86mEqViD-4tUTUqFVfa8:1758175766042'
            },
            {
                id: 'coal-lab-2024-mid1b',
                title: 'COAL Lab Mid 2024 Paper B',
                year: '2024',
                semester: 'Spring',
              difficulty: 4.1,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1sYbII07RFJEtrlJaJPsVFo1sCIt8JVdM&export=download&authuser=0&confirm=t&uuid=d3690245-1ee4-4ae7-b6a2-90f141f7d1e3&at=AN8xHood8vU_VQogPFfldJAbL8dx:1758175799436'
            },
            {
                id: 'coal-lab-2024-mid1c',
                title: 'COAL Lab Mid 2024 Paper C',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.2 MB',
              difficulty: 4.5,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1lMImgzZu5KKcpOpxkst75ffn7IkryAsu&export=download&authuser=0&confirm=t&uuid=96cbc17d-ddaa-4a4c-88d3-1f646f7c73bd&at=AN8xHor8c7WhbxdKl4CN-fAxqxOl:1758175803109'
            },
            {
                id: 'coal-lab-2021-mid1',
                title: 'COAL Lab Mid 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.5 MB',
              difficulty: 3.9,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1GJEyMFr1OEBsztI7aFtaNSNmv9jrhYfS&export=download&authuser=0&confirm=t&uuid=ee8396aa-25eb-4f67-b175-f29ff2b4ad83&at=AN8xHorSTkggD17JIaHQPEYZutTP:1758175759877'
            },
            {
                id: 'coal-lab-2020-mid1',
                title: 'COAL Lab Mid 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '1.9 MB',
              difficulty: 3.6,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1KUi3LbnuqhOTF9vdPnfHZOzfoyuxibua&export=download&authuser=0&confirm=t&uuid=08147c8c-b96f-4899-90dd-099c933ebbf1&at=AN8xHoolhe72CtAUtwV1Rql8QdXd:1758175757540'
            }
        ],
        mid2: [],
        final: [
            {
                id: 'coal-lab-2024-finalA',
                title: 'COAL Lab Final 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QGBquPpSfsCLMPqKdH_qOAG3m8EUGfpT&export=download&authuser=0&confirm=t&uuid=6a6d593e-1888-442d-ba19-b7e7f6abaae3&at=AN8xHoo8H-t3K8xH-zLDlWreNHF7:1758175746869'
            },
            {
                id: 'coal-lab-2024-finalB',
                title: 'COAL Lab Final 2024 Paper B',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '1.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1kYEJ5deAbKIChYadwo49hzIu9YZQfF30&export=download&authuser=0&confirm=t&uuid=4d38954b-1292-47e2-b30b-198b6548611f&at=AN8xHoqBe_mvYZdKWqz-Aw2yLoRv:1758175750102'
            },
            {
                id: 'coal-lab-2024-finalC',
                title: 'COAL Lab Final 2024 Paper C',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.6,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1lwyeO7RVASX0mI_FMvL24jK_55ZSJ4EF&export=download&authuser=0&confirm=t&uuid=58df5457-a4ae-41d8-bdc9-92ffb8cdfd36&at=AN8xHoqR5ydt-JqtLzulDy8i3ZHa:1758175753680'
            },
            {
                id: 'coal-lab-2020-final',
                title: 'COAL Lab Final 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '1.3 MB',
                difficulty: 3.7,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1moXpZ4WdmOgtR4bLjWhLrsdcZicW5c_y&export=download&authuser=0&confirm=t&uuid=8ee6b38d-39f3-43ad-b9ff-f9ace737698d&at=AN8xHooKFACKQn5yhqpzcetNI9Aq:1758175743105'
            },
             {
                id: 'coal-lab-2017-final-b',
                title: 'COAL Lab Final 2017 A',
                year: '2017',
                semester: 'Spring',
                difficulty: 4.5,
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1BS6uRWG-JJZOVu-wLDb42LdGQ3Muksb_&export=download&authuser=0&confirm=t&uuid=910a6c8f-b017-4968-8aff-21c8ab92a7f1&at=AKSUxGMYRZIdBewTSYwM_yfGY5Rg:1760155353536'
            },
            {
                id: 'coal-lab-2017-final',
                title: 'COAL Lab Final 2017 B',
                year: '2017',
                semester: 'Spring',
                difficulty: 4.2,
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1wn9ElFuw9eKu3F6wqRObJKVQxWsCOq9Z&export=download&authuser=0&confirm=t&uuid=f34ceff9-2b3f-40e8-920c-1055e799a6b9&at=AKSUxGN5xSQPc8pvmPlJ6-G053HR:1760155358957'
            }
        ],
        quiz: []
    }
},

'data-structures-lab': {
    title: 'Data Structures Lab',
    description: 'Practical implementation of data structures and algorithms in programming',
    icon: 'DSL',
    papers: {
        mid1: [
            {
                id: 'ds-lab-2024-mid1a',
                title: 'DSA Lab Mid 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.8 MB',
              difficulty: 4.0,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1zWAMspE8lNGalBzvpc_4NkNK42TIS6Pq&export=download&authuser=0&confirm=t&uuid=5114351b-2c89-4031-af25-ab84b5ec11c0&at=AN8xHop3KOzoqDGyOgRfyw54Q5B2:1758176553399'
            },
            {
                id: 'ds-lab-2024-mid1b',
                title: 'DSA Lab Mid 2024 Paper B',
                year: '2024',
                semester: 'Spring',
              difficulty: 4.1,
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mw1pJXww1agdDNu6pGOlvi0vhQjLCgKl&export=download&authuser=0&confirm=t&uuid=27d75d3e-9b02-4c9a-b81c-cb0257675d68&at=AN8xHop84Jmxc7uRW_eiiB8jGOSY:1758176557746'
            },
            {
                id: 'ds-lab-2024-mid1c',
                title: 'DSA Lab Mid 2024 Paper C',
                year: '2024',
                semester: 'Spring',
              difficulty: 4.3,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=15ZdJYMu_hj75a7Z8K36em8w0MAgL3EAt&export=download&authuser=0&confirm=t&uuid=1112711c-fafe-4a66-a53d-e6f506e71350&at=AN8xHopsOKtopnN-DcHwwSAeuBdv:1758176561545'
            },
            {
                id: 'ds-lab-2024-mid1d',
                title: 'DSA Lab Mid 2024 Paper D',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.3 MB',
              difficulty: 4.6,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1-S42euKAKw3O5IjqZpK18Codr-27qU9B&export=download&authuser=0&confirm=t&uuid=ceaaddf5-2442-49c5-8705-e51d9384b17b&at=AN8xHopiPc9A-4u8ldIvncohje6r:1758176565664'
            },
            {
                id: 'ds-lab-2023-mid1',
                title: 'DSA Lab Mid 2023',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.5 MB',
              difficulty: 3.6,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=129HLQus0fkAq2We3zoVnrso4n5nsv9nQ&export=download&authuser=0&confirm=t&uuid=afa4215f-90c5-46a9-b3c6-58f2d312672e&at=AN8xHoqZOYQYpjvYS6edL3kyHNq7:1758176549519'
            }
        ],
        mid2: [],
        final: [
            {
                id: 'ds-lab-2024-finalA',
                title: 'DSA Lab Final 2024 Paper A',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=12z_XcAYmjnHj35F0lcxSywz6j4j7n-hn&export=download&authuser=0&confirm=t&uuid=fedf5590-b698-41c0-8e30-0ae4771a7a17&at=AN8xHopIE4Bx__poC9K57DSWafkT:1758176519460'
            },
            {
                id: 'ds-lab-2024-finalB',
                title: 'DSA Lab Final 2024 Paper B',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.0,
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=125IlAEVG84gF1cotJwIu7q7Djlrve8RS&export=download&authuser=0&confirm=t&uuid=d999092e-d058-47cd-8df1-d0f530bb7287&at=AN8xHorXRx0uqfPwWrJkybACb8kC:1758176521222'
            },
            {
                id: 'ds-lab-2024-finalC',
                title: 'DSA Lab Final 2024 Paper C',
                year: '2024',
                semester: 'Spring',
                difficulty: 4.6,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1VZjYgrcQ2VVuLRGc2VpMStVVFS9RJeMv&export=download&authuser=0&confirm=t&uuid=40b1965d-154c-47d8-83d1-942241b75192&at=AN8xHorEZz0VyzrG_Kx476Bez-KH:1758176523112'
            },
            {
                id: 'ds-lab-2024-finalD',
                title: 'DSA Lab Final 2024 Paper D',
                year: '2024',
                difficulty: 4.4,
                semester: 'Spring',
                fileSize: '1.1 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1n4H5dVbc18SkDUlmUURWKLAw7G7pX0Bx&export=download&authuser=0&confirm=t&uuid=d2156dc9-f69c-476f-a304-6a8a188c667c&at=AN8xHoo7WG1qrzjr2UYpCmFNIT4A:1758176532132'
            },
            {
                id: 'ds-lab-2024-finalE',
                title: 'DSA Lab Final 2024 Paper E',
                year: '2024',
                difficulty: 4.2,
                semester: 'Spring',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1FaMu0dkCSuzZk7RzbvXINji8kzHNjOmp&export=download&authuser=0&confirm=t&uuid=0efe01fc-e8f9-4ee3-a6e3-5e50dd55a47e&at=AN8xHopVtqHNCEDk0_dW8BpUflIZ:1758176533565'
            },
            {
                id: 'ds-lab-2020-final',
                title: 'DSA Lab Final 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '1.3 MB',
                difficulty: 3.8,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1n3L7gjOSRivPQcX5DRU04evA6AWUukY0&export=download&authuser=0&confirm=t&uuid=18973477-71f5-4331-a268-013f25666099&at=AN8xHoqSNuqx8g_GAJPfri0JDVLw:1758176513473'
            }
        ],
        quiz: []
    }
},

'ideology-constitution-pakistan': {
    title: 'Ideology and Constitution of Pakistan',
    description: 'Study of Pakistani ideology, constitutional framework, and political system',
    icon: 'ICP',
    papers: {
        mid1: [
            {
                id: 'icp-2024-spring-mid1',
                title: 'ICP Mid 1 Spring',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1KaVh-Bp_BO5JTcAhhq9Iv6yKOGldAPPb&export=download&authuser=0&confirm=t&uuid=eb3be1be-941a-4a54-9bfd-b4d8684a9eec&at=AN8xHorNFprtb4MMk9wtz-oJeTqS:1758103572951'
            },
            {
                id: 'icp-2022-fall-mid1',
                title: 'ICP Mid 1 2022 Fall',
                year: '2022',
                semester: 'Fall',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1_UfBgAqHqExVrt_mQR1CPqLIt-yjBTMN&export=download&authuser=0&confirm=t&uuid=fbfd018b-5dc6-4f18-ab10-92355b1620fd&at=AN8xHorUkNohoOFTiP_VAV1khtb7:1758103568873'
            }
        ],
        mid2: [
            {
                id: 'icp-2024-mid2',
                title: 'ICP Mid 2',
                year: '2024',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1jfjxGkxZ-yM0-dZ7Var-Qn_JZAOByimm&export=download&authuser=0&confirm=t&uuid=23ec6985-e1ec-4869-8591-e6f56f67663b&at=AN8xHop_XDjV45x1HpYwkhSHsLSb:1758103583962'
            },
            {
                id: 'icp-2022-mid2',
                title: 'ICP Mid 2 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1JtxrDAsXul8TRYM5BOsNdjGoPI91Vlry&export=download&authuser=0&confirm=t&uuid=e3ee7d52-6d39-4f95-b054-98e953ff8564&at=AN8xHop9mwhgAPv6D38dgSUANS5L:1758103577778'
            }
        ],
        final: [],
        quiz: [  {
                id: 'icp-2022-mid2',
                title: 'ICP Notes',
                year: '2023',
                semester: 'Spring',
                fileSize: '1.2 MB',
                difficulty: 4.2,
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1jO5sRPtUr33qJ2J9NhtAG08QzXpEgPhN&export=download&authuser=0&confirm=t&uuid=0bd9108b-af92-4ac9-aa24-4e32d105bcce&at=AKSUxGMjwhggsFNmHVS8m40GR4Zc:1760154994189'
            }]
    }
},
'design-analysis-algorithms': {
    title: 'Design and Analysis of Algorithms',
    description: 'Advanced algorithmic design techniques, complexity analysis, and optimization methods',
    icon: 'DAA',
    papers: {
        mid1: [
            {
                id: 'daa-2021-mid1',
                title: 'DAA Mid 1 2021',
                year: '2021',
                semester: 'Spring',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1thsV8NAoHR_KJ1-Jdzezmz70hKKXzLBN&export=download&authuser=0&confirm=t&uuid=3799f366-bc39-41c2-afce-e39b4a6dd5b6&at=AN8xHoqgmPElEboEQR2ReJRTW5Rp:1758102107570'
            },
            {
                id: 'daa-2020-mid1',
                title: 'DAA Mid 1 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=19ml6TTw7QpklPeQwAAzw9VfnT28T7jMf&export=download&authuser=0&confirm=t&uuid=e4d27663-bfd0-43a5-8023-43408cc59d58&at=AN8xHorLRajtK2tP3KEYtM3qR_XS:1758102112379'
            },
            {
                id: 'daa-2019-mid1',
                title: 'DAA Mid 1 2019',
                year: '2019',
                semester: 'Spring',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=16hcjrHdYVebu73IcT4jTUOAvC9MrQ2AF&export=download&authuser=0&confirm=t&uuid=dd7d0d3a-a03c-4eba-ae6e-27cef7daa1e0&at=AN8xHooFNvKfUWahrlZNFstUzZgm:1758102116908'
            },
            {
                id: 'daa-2018-mid1',
                title: 'DAA Mid 1 2018',
                year: '2018',
                semester: 'Spring',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1AZXYFyuyNI8Zqs76Jhea04io6ntULPx7&export=download&authuser=0&confirm=t&uuid=6c3717d8-3c3b-41ce-bb65-6cc164a8e507&at=AN8xHoovn7kpz2Lw7diYK1Z8tKeB:1758102120779'
            },
            {
                id: 'daa-2017-mid1',
                title: 'DAA Mid 1 2017',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=11hWK-D3v7Jk5WNHtCMjFTWHJ1LVnHGqb&export=download&authuser=0&confirm=t&uuid=1f3454bb-9425-4db3-9eb5-24977ba32ff4&at=AN8xHoqCMKUZ7-yqBacv83bvVUPN:1758102124481'
            },
            {
                id: 'daa-2017-mid1-solution',
                title: 'DAA Mid 1 2017 Solution',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1z35dAJ02MPlR9NqU6S_7QI9LttMdmQhC&export=download&authuser=0&confirm=t&uuid=bf26c92c-ddb8-4664-80db-cf659a48fd01&at=AN8xHoomPY720D4Cw7XiiA4gvamv:1758102128212'
            }
        ],
        mid2: [
  {
    id: "daa-mid2-2022",
    title: "DAA Mid 2 2022",
    year: "2022",
    difficulty: 4.5,
    filesize: "1.7 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1-4TmLR5voRyetWNS4NS9sGCycv8bgcAh&export=download&authuser=0&confirm=t&uuid=abd0dfc7-5038-45c8-921e-0c4bd2473d97&at=AKSUxGMvqgsJNgnhVMuWgBNQ7ibX:1760847287361"
  },
  {
    id: "daa-mid2-2021",
    title: "DAA Mid 2 2021",
    difficulty: 4.3,
    year: "2021",
    filesize: "1.4 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1qgIxO2y5_BiD9QLpwXjo4GfQbuzs2uBg&export=download&authuser=0&confirm=t&uuid=d6c3d492-04e2-4ad8-8728-a1fe7f988b05&at=AKSUxGNeEcX6ylzDNc0pIC285F54:1760847280764"
  },
  {
    id: "daa-mid2-2020",
    difficulty: 4.0,
    title: "DAA Mid 2 2020",
    year: "2020",
    filesize: "1.9 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1E90E5LLp93N7hXcMI-9_WWIY2hj_0U5n&export=download&authuser=0&confirm=t&uuid=ae065f08-06a1-4458-b6e3-37bdcea02c02&at=AKSUxGOSB7dCYzig7_wXmOZLGB_l:1760847274919"
  },
  {
    id: "daa-mid2-2019",
    title: "DAA Mid 2 2019",
    difficulty: 3.9,
    year: "2019",
    filesize: "1.3 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1PuM5HWZ8m32NrvG0JMCpZn2fDcE_vk4W&export=download&authuser=0&confirm=t&uuid=223fec36-0354-48d3-8dbc-1ae72913ab8c&at=AKSUxGP0z-p6adl_47omnyRbdngU:1760847269437"
  },
  {
    id: "daa-mid2-2018",
    title: "DAA Mid 2 2018",
    year: "2018",
    difficulty: 3.7,
    filesize: "1.6 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1q7SiSpIV8T7vdqSOz-VhdGSPNkFLwk-f&export=download&authuser=0&confirm=t&uuid=a538ae7d-8681-4b6f-836c-94f2f91a48b5&at=AKSUxGP5oHh2rG3YQKhYJjFBhkLz:1760847263351"
  },
  {
    id: "daa-mid2-2017",
    title: "DAA Mid 2 2017",
    year: "2017",
    difficulty: 3.5,
    filesize: "1.2 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1bRZRQ4rBxvcIeoGsnnupMLvOc_YYZhDk&export=download&authuser=0&confirm=t&uuid=1d50a949-e735-400d-bb9f-e0662e886fe7&at=AKSUxGP3eX-4w0f7CmZDQwGXzCq7:1760847257546"
  }
],
        final: [
  {
    id: "daa-final-2021",
    title: "DAA Final 2021",
    year: "2021",
    difficulty: 4.5,
    filesize: "1.8 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1FzcjIqgr72caUoiWnlUHyax5HkKb4iMk&export=download&authuser=0&confirm=t&uuid=f72fb7e3-d916-42bc-8edb-e632d59697ba&at=AKSUxGMwUOU0km9_zlZk0F29Yh3y:1760847677472"
  },
  {
    id: "daa-final-2020",
    title: "DAA Final 2020",
    year: "2020",
    difficulty: 4.3,
    filesize: "1.5 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1lHJg0B4XLvXgI_B3ALIz50hEh2g20GiE&export=download&authuser=0&confirm=t&uuid=6829b3af-c728-41d1-a482-3f07d177ebf5&at=AKSUxGP0tx5cibccKdLZ7otchlvl:1760847672225"
  },
  {
    id: "daa-final-2019",
    title: "DAA Final 2019",
    year: "2019",
    difficulty: 4.1,
    filesize: "1.3 MB",
    downloadUrl: "https://drive.usercontent.google.com/download?id=1jh7wdnMIHHtZIF5oAasgl4ZgpYxuWNOw&export=download&authuser=0&confirm=t&uuid=7d409912-9e42-48b5-8f45-91a9d3fad1df&at=AKSUxGN3pQwxC1N44pg2XDFtCwge:1760847666017"
  },
  {
    id: "daa-final-2018",
    title: "DAA Final 2018",
    year: "2018",
    filesize: "1.6 MB",
    difficulty: 4.0,
    downloadUrl: "https://drive.usercontent.google.com/download?id=1oBkLMkjqlDXbJ8ohxnXKIBpZ8PwO1Z4N&export=download&authuser=0&confirm=t&uuid=15fe8d84-a0b3-45af-846b-c251eeafffb1&at=AKSUxGOpZ7qazuUQ11Jx7ugJchk7:1760847658669"
  },
  {
    id: "daa-final-2017",
    title: "DAA Final 2017",
    year: "2017",
    filesize: "1.9 MB",
    difficulty: 3.8,
    downloadUrl: "https://drive.usercontent.google.com/download?id=1rctxZUrHSyRFfm_Un4h3p1SvXvBE20qB&export=download&authuser=0&confirm=t&uuid=77ae7447-b9d4-4285-9aa2-ac1eef35281e&at=AKSUxGMmKd5_zqtAjIQ-lNv-RxRr:1760847652976"
  }
],
        quiz: []
    }
},

'database-system': {
    title: 'Database System',
    description: 'Database design, SQL, normalization, transaction management, and database administration',
    icon: 'DBS',
    papers: {
        mid1: [
            {
                id: 'dbs-2022-spring-mid1',
                title: 'DBS Mid 1 2022',
                year: '2022',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1oAM1vWy05b8BXFPIIvvA6KgywDkc9fry&export=download&authuser=0&confirm=t&uuid=1e28a665-3caa-4b95-a417-30dd234d0673&at=AN8xHop60-fE-I6ZnLaVvcHotVFq:1758177337735'
            },
            {
                id: 'dbs-2020-spring-mid1',
                title: 'DBS Mid 1 2020',
                year: '2020',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1L5ZMW5ULUVAbGiGwhu1GQ5xaeZADaYG9&export=download&authuser=0&confirm=t&uuid=a8bd6120-88d2-4fe0-b894-ee7b4bbaccaf&at=AN8xHoqgVDDZFXZ8R3klWW9gTdzT:1758177333845'
            },
            {
                id: 'dbs-2018-spring-mid1',
                title: 'DBS Mid 1 2018',
                year: '2018',
                semester: 'Spring',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1BPdFOQrOFoItio0c2nzyki9VvJbtOJZF&export=download&authuser=0&confirm=t&uuid=8bf2bb71-8639-49de-8644-46db32e7fe3e&at=AN8xHopBzcXYKdom-ROHB8Qhfj5Z:1758177330465'
            },
            {
                id: 'dbs-2017-spring-mid1',
                title: 'DBS Mid 1 2017',
                year: '2017',
                semester: 'Spring',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1BWhnliOjXLpbSaqXsNieYTgd8ZM6twz3&export=download&authuser=0&confirm=t&uuid=f5569ad9-cceb-4411-af85-da4b09ad88a2&at=AN8xHoop4Yuluj7dULC0ZF-Pr3kY:1758177326588'
            }
        ],
        mid2: [
            {
                id: 'dbs-2022-spring-mid2',
                title: 'DBS Mid 2 2022',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.2,
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=13ncUSms1g4TLxZ7TzxHr_9OqAXNZ17-P&export=download&authuser=0&confirm=t&uuid=7e5a20db-a9e1-4bbe-a59f-790425c2f9a8&at=AN8xHooeKDzFDwsq-ZagFdYngI5z:1758177357918'
            },
            {
                id: 'dbs-2019-spring-mid2',
                title: 'DBS Mid 2 2019',
                year: '2019',
                semester: 'Spring',
                difficulty: 3.9,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ZbGxuq4PbX7AcuvPH9KTYIZDhIiUeIVY&export=download&authuser=0&confirm=t&uuid=63b615ca-dedc-4d65-97c2-2896369722bf&at=AN8xHoqiOq770rDNVt_14tICDw7h:1758177353154'
            },
            {
                id: 'dbs-2017-spring-mid2',
                title: 'DBS Mid 2 2017',
                year: '2017',
                semester: 'Spring',
                difficulty: 4.5,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mH-bRqcqYT0neokxjgCyL3VecFdPUmB1&export=download&authuser=0&confirm=t&uuid=612e7b61-0b78-4fd8-8883-28eb3ba8427f&at=AN8xHorvYRdgWwpFQqht8Mu6-X6d:1758177349016'
            },
            {
                id: 'dbs-2017-spring-mid1',
                title: 'DBS Solution A',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=18tilFMv5r6DhUa_Kc0hEd-84bhnSfrYp&export=download&authuser=0&confirm=t&uuid=a7b406d0-1730-4508-9d6f-9c3ab1b6321a&at=AKSUxGPmhGE2jrmhYkH1K-JtjE6o:1760156015974'
            },
            {
                id: 'dbs-2017-sprding-mid1',
                title: 'DBS Solution B',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.3,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=18rzszDNd2MmabuDg1ARIvrX-Vy-hM635&export=download&authuser=0&confirm=t&uuid=3edb2aea-b452-4caa-8340-d144a1567d57&at=AKSUxGMXh_toocwDWS_PB39vOr6N:1760156018753'
            },
            {
                id: 'dbs-2017-sprindg-mid1',
                title: 'DBS Solution C',
                year: '2022',
                semester: 'Spring',
                difficulty: 4.2,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1VjB9pRdFbd8BebzQPOTjpsCmj1XfTmxD&export=download&authuser=0&confirm=t&uuid=25103fc6-041b-4dba-8ed1-ebb56b76d4cd&at=AKSUxGPY4_NSYqRM0x2YH0wgaLC0:1760156023152'
            },
            {
                id: 'dbs-2017-spring-mid1',
                title: 'DBS Mid 2 2022 ISB',
                year: '2022',
                semester: 'Spring',
                difficulty: 3.8,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1B1jXnxIL2XBl9LtrBiIzGGGCkQwAUo5E&export=download&authuser=0&confirm=t&uuid=4eb28f90-a999-49c3-99b3-58b181dc754e&at=AKSUxGOIuulSwTdoMhDqob9Lzn-d:1760156030842'
            }
        ],
        final: [
            {
                id: 'dbs-2021-fall-final',
                title: 'DBS Final 2021',
                year: '2021',
                semester: 'Fall',
                difficulty: 4.2,
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1TfX7YwVg7C-7H_eMKqV7A_Obv9Y1ac6D&export=download&authuser=0&confirm=t&uuid=f2c57425-89b3-4efd-801b-81e548801113&at=AN8xHooSoAb7tMH8ihafqOWG3T3d:1758177323009'
            },
            {
                id: 'dbs-2020-fall-final',
                title: 'DBS Final 2020',
                year: '2020',
                difficulty: 4.1,
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1EEJ1-AXLpQdjfvVV8d4nqy2Ez0vwRzYG&export=download&authuser=0&confirm=t&uuid=25758f3c-7576-4adc-9c4f-ada88ed18d3e&at=AN8xHoqD-A4119l-BxR7HC4FoBJv:1758177319395'
            },
            {
                id: 'dbs-2018-fall-final',
                title: 'DBS Final 2018',
                year: '2018',
                semester: 'Fall',
                difficulty: 4.2,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1GOsHA0udKhwZnVn1Y7XvV3KjMb-QFlsZ&export=download&authuser=0&confirm=t&uuid=70f5c0b6-1f1b-4ccf-8e49-f9040b85eebc&at=AN8xHoodpMlEyRW2IFHhK32xWHVY:1758177315537'
            },
            {
                id: 'dbs-2016-fall-final',
                title: 'DBS Final 2016',
                year: '2016',
                semester: 'Fall',
                difficulty: 4.8,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1sGPPIkd0Zg_0-KasRHSKODHNgNBktlhJ&export=download&authuser=0&confirm=t&uuid=8541ff44-bd63-4d8b-abf5-5e4ee09bb30c&at=AN8xHor6rmPX-1YpoMLKlRP28qj7:1758177311931'
            },
            {
                id: 'dbs-2024-fall-final',
                title: 'DBS Final 2024 ISB',
                year: '2024',
                semester: 'Fall',
                difficulty: 4.6,
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=10JULk-TLvZkhUCVkD6LNVlMqtgtCchu8&export=download&authuser=0&confirm=t&uuid=55b27c41-c714-440a-babc-6439c20837c0&at=AKSUxGPaJqk3bUcgrrl2UFqBs9fq:1760156177044'
            }
        ]
    }
}, 
'computer-networks': {
    title: 'Computer Networks',
    description: 'Network protocols, TCP/IP, routing, switching, and network security fundamentals',
    icon: 'CN',
    papers: {
        mid1: [
            {
                id: 'lhr-cn-mid1-2025',
                title: 'LHR CN Mid 1 2025',
                semester: 'Mid 1',
                year: '2025',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1IUBiv2WtLBwRv6X4kA86-YflSinHH4Ov&export=download&authuser=0&confirm=t&uuid=399433e8-0735-45e8-a07d-91dca4533799&at=AN8xHoowp8Yyp09w7I9bp956K_dB:1758178922181'
            },
            {
                id: 'cn-mid1-2025',
                title: 'CN Mid 1 2025',
                semester: 'Mid 1',
                year: '2025',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1n7WZQb-9QhRkA8bgh9_k_Er3FKBcB89b&export=download&authuser=0&confirm=t&uuid=ccf53d9e-0b13-4d73-896b-6b6dc0bef3ad&at=AN8xHopu9uUm9uDQcxJgROzuBLF1:1758178918093'
            },
            {
                id: 'cn-mid1-2024',
                title: 'CN Mid 1 2024',
                semester: 'Mid 1',
                year: '2024',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ZRsNTMzMMt-8SW_NLO8rarquLAnujKHX&export=download&authuser=0&confirm=t&uuid=cbdb4511-d502-4d5c-8463-df8ba87f79d5&at=AN8xHor1Wx1edMY44Ky4drvQnSaj:1758178914569'
            },
            {
                id: 'cn-mid1-2024-fall',
                title: 'CN Mid 1 2024 Fall',
                semester: 'Mid 1',
                year: '2024',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1mxa2Vmstlgr_mnuKk8G7Re9WNS7RoWtV&export=download&authuser=0&confirm=t&uuid=da49ab99-387d-45f9-8e69-9bdfff4182f6&at=AN8xHootB_YkixDXORLgt_8Bi-TD:1758178910426'
            },
            {
                id: 'cn-mid1-2023',
                title: 'CN Mid 1 2023',
                semester: 'Mid 1',
                year: '2023',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1oDgmtsaXdpnetJ9zOI4Ig9gyVgVXhkK2&export=download&authuser=0&confirm=t&uuid=16a59e02-07b5-4c1d-a525-1a413921625c&at=AN8xHoomav94vzwIRY1o8aLxSsko:1758178906534'
            },
            {
                id: 'cn-mid1-2022',
                title: 'CN Mid 1 2022',
                semester: 'Mid 1',
                year: '2022',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1Mf0FsIqws1oWpBDXQ4PpFLmYBhujxwNN&export=download&authuser=0&confirm=t&uuid=6824a551-dff6-48d9-9149-7743658d737b&at=AN8xHopMN2zPW_DprxdgbPQcnYFS:1758178901802'
            },
            {
                id: 'cn-mid1-2018',
                title: 'CN Mid 1 2018',
                semester: 'Mid 1',
                year: '2018',
                fileSize: '1.2 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1xpHlvvVa_mzcd_pBvAqYX08hEwmstAZM&export=download&authuser=0&confirm=t&uuid=c6a9a50e-805f-4455-b3ff-793de540e19a&at=AN8xHopNzYFH8k5D6PLefsEmceO9:1758178896140'
            },
            {
                id: 'cn-mid1-2017',
                title: 'CN Mid 1 2017',
                semester: 'Mid 1',
                year: '2017',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1VuVrwTDuXKYVI-qZDMhDTDCuIFcKpNmd&export=download&authuser=0&confirm=t&uuid=93112a43-7dd6-463d-8153-da02ea78efa2&at=AN8xHooBoBJnj4gJAYo-27TdepnI:1758178891356'
            }
        ],
        mid2: [
    {
        id: 'cn-mid2-2018',
        title: 'CN Mid 2 2018',
        semester: 'Mid 2',
        difficulty: 4.0,
        year: '2018',
        fileSize: '1.4 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1sSDRJMXWw0ZmqNH49DWJtmlib9nzCSr2&export=download&authuser=0&confirm=t&uuid=fa503814-6cd0-41b3-9291-a4148c24832d&at=AKSUxGOeqsJO_vrc_s_1FyVvfCu1:1760265772838'
    },
    {
        id: 'cn-mid2-2019-lhr',
        title: 'CN Mid 2 2019 LHR',
        semester: 'Mid 2',
        year: '2019',
        difficulty: 3.8,
        fileSize: '1.3 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1zdu025zVPFBmhP6GMI__WDOo5R0fXrNR&export=download&authuser=0&confirm=t&uuid=9d35050a-d61f-4ff6-b1ff-0d73916db901&at=AKSUxGNbi_gHbBOi56eikfyu6NfX:1760265763354'
    },
    {
        id: 'cn-mid2-2020-isb',
        title: 'CN Mid 2 2020 ISB',
        semester: 'Mid 2',
        difficulty: 4.2,
        year: '2020',
        fileSize: '1.5 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1gvRwTuyNOKRJFa2OVDkU4fyl7Czb8xfG&export=download&authuser=0&confirm=t&uuid=d9564888-90cd-46fa-bf09-2a6c0d6da474&at=AKSUxGMu3XasUYwQHwsWdrGHy_Rk:1760265757684'
    },
    {
        id: 'cn-mid2-2021-lhr',
        title: 'CN Mid 2 2021 LHR',
        semester: 'Mid 2',
        year: '2021',
        difficulty: 3.5,
        fileSize: '1.6 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1KUA3_GKbiWAPs4B3RDV1-4USgPKjHrDT&export=download&authuser=0&confirm=t&uuid=c0148a4d-c6a2-422b-b451-50ae2c7f9875&at=AKSUxGOUUqa6plKG3gNjIrZb1wvl:1760265750873'
    },
    {
        id: 'cn-mid2-2021',
        title: 'CN Mid 2 2021',
        semester: 'Mid 2',
        difficulty: 4.8,
        year: '2021',
        fileSize: '1.4 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1jHMYq5_F-ESzLfe6qGBX2d0mineIMnZ6&export=download&authuser=0&confirm=t&uuid=1dadc669-9558-4130-9161-6b883cf84212&at=AKSUxGOX9RR2jhAKzVx3GdwWCywd:1760265743728'
    },
    {
        id: 'cn-mid2-2024-fall-lhr',
        title: 'CN Mid 2 2024 Fall LHR',
        semester: 'Mid 2',
        year: '2024',
        fileSize: '1.8 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1UTVJRXHmD8k2DE0qxdpe9tV8eQ6bbxEJ&export=download&authuser=0&confirm=t&uuid=9fcaacee-3408-47ea-806f-db6e3c1a94b2&at=AKSUxGNUguygWyrT29WVaZb8zQgd:1760265728594'
    },
    {
        id: 'cn-mid2-2024-isb',
        title: 'CN Mid 2 2024 ISB',
        semester: 'Mid 2',
        year: '2024',
        difficulty: 4.7,
        fileSize: '1.8 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1UTVJRXHmD8k2DE0qxdpe9tV8eQ6bbxEJ&export=download&authuser=0&confirm=t&uuid=9fcaacee-3408-47ea-806f-db6e3c1a94b2&at=AKSUxGNUguygWyrT29WVaZb8zQgd:1760265728594'
    },
    {
        id: 'cn-mid2-2024-lhr',
        title: 'CN Mid 2 2024 LHR',
        semester: 'Mid 2',
        year: '2024',
        difficulty: 4.5,
        fileSize: '1.9 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1xSH_nSczauabzVZrz_OEOS3jJwGVfk2A&export=download&authuser=0&confirm=t&uuid=013cbf65-5f93-4663-aa59-935594dbbdb0&at=AKSUxGNO4-v1ttT2gHxqIhVfZdgp:1760265706584'
    },
    {
        id: 'cn-mid2-practice',
        title: 'CN Mid 2 Practice Questions',
        semester: 'Mid 2',
        year: '2024',
        difficulty: 4.1,
        fileSize: '1.3 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1CJFYph8W6g20QZcxAycbaeaVF1w2phed&export=download&authuser=0&confirm=t&uuid=a87fc923-14c3-45eb-829b-a1c9a1354100&at=AKSUxGNNQtAgqdV10zXz2Iz_9Cez:1760265678277'
    },
    {
        id: 'cn-mid2-solution',
        title: 'CN Mid 2 Solution',
        semester: 'Mid 2',
        year: '2024',
        fileSize: '1.4 MB',
        downloadUrl: 'https://drive.usercontent.google.com/download?id=1idbKIDvW9y9qI8g74ZdL-hnmH2mwbc8l&export=download&authuser=0&confirm=t&uuid=e1935fd0-4604-45db-834f-70730a9f4e18&at=AKSUxGPcvmkjdUQAIzbwstkHvRTC:1760265647951'
    }
],

        final: [],
        quiz: []
    }
},
'multivariable-calculus': {
    title: 'Multivariable Calculus',
    description: 'Advanced calculus with multiple variables, partial derivatives, multiple integrals, and vector calculus',
    icon: '📐',
    papers: {
        mid1: [
            {
                id: 'mvc-mid1-2016-fall',
                title: 'MVC Mid 1 2016',
                year: '2016',
                semester: 'Fall',
                fileSize: '1.5 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1CRMol8OSafbQgIL6KQl_vBDjyLPEClvw&export=download&authuser=0&confirm=t&uuid=403c6b1c-47c1-476c-8bcf-4326c1b6ea01&at=ANTm3cwVjotewBrCmLuoGyKdtvYW:1769006198927'
            },
            {
                id: 'mvc-mid1-2024-fall',
                title: 'MVC Mid 1 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1SFJVKT_vAZESFmeFNIsvrGOEkEGv6RVH&export=download&authuser=0&confirm=t&uuid=12878b94-3402-4322-a27d-21b335050f1f&at=ANTm3cwvIWc6txU1D934e_sx6Zne:1769006180675'
            },
            {
                id: 'mvc-mid1-2024-fall-solution',
                title: 'MVC Mid 1 2024 Solution',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1KGnad1GdobTw7HbaFCpAs-xND9hOHMU3&export=download&authuser=0&confirm=t&uuid=f158f133-98c2-4c76-8403-86f51259cbba&at=ANTm3cww_ZdYHO7polpeMPaF_Vg4:1769006175363'
            }
        ],
    
        mid2: [
            {
                id: 'mvc-mid2-2016-fall',
                title: 'MVC Mid 2 2016',
                year: '2016',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1-eAVaCTknRzLcc1bQqCQ-Nhm8DU49Rpr&export=download&authuser=0&confirm=t&uuid=c6406088-68aa-4c5c-b71a-6a4962c5f7b1&at=ANTm3cylsP4WkZCtbmeWEzSkIl1G:1769005998531'
            },
            {
                id: 'mvc-mid2-2024-fall',
                title: 'MVC Mid 2 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1MQFqn-pAt4VzpV4RJZAWvzmKjx2oOC3p&export=download&authuser=0&confirm=t&uuid=8225ec6a-e8b5-4fe9-9479-8c665d338da3&at=ANTm3czNd1CD3R_qo5ggjcAetbkU:1769006191558'
            },
            {
                id: 'mvc-mid2-2024-fall-solution',
                title: 'MVC Mid 2 2024 Solution',
                year: '2024',
                semester: 'Fall',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1ps_p6gKVJUgyHsU1HUOPWptzBcy4b9v1&export=download&authuser=0&confirm=t&uuid=b53e1a99-9a2d-4188-98ba-a840a14a73ed&at=ANTm3cyM-_S-77EVC0cafqtVjo4Y:1769006186162'
            }
        ],
    
        final: [
            {
                id: 'mvc-final-2016-fall',
                title: 'MVC Final 2016',
                year: '2016',
                semester: 'Fall',
                fileSize: '1.9 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1dcHBz99uBLRr2cSVCrCbl27SI64NNXAh&export=download&authuser=0&confirm=t&uuid=b103794f-c0f2-42ad-8cab-39b6f7668aef&at=ANTm3czm9C0lVg_0_aGREfT9QWds:1769005994321'
            },
            {
                id: 'mvc-final-2024-fall',
                title: 'MVC Final 2024',
                year: '2024',
                semester: 'Fall',
                fileSize: '2.0 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1st4jyQNN7yQUl8rSFXOPAa4-3sbf-pBb&export=download&authuser=0&confirm=t&uuid=bdae515f-8798-429a-bc1b-58afaf67735b&at=ANTm3cwCMeftlO6DVaBRfVge7lVG:1769005988852'
            }
        ]
    }
},
'expository-writing': {
    title: 'Expository Writing',
    description: 'Learn to write clear, informative, and well-structured expository essays and academic papers',
    icon: '✍️',
    papers: {
        mid2: [],
        mid1: [
            {
                id: 'ew-mid1-2021-fall',
                title: 'EW Mid 1 2021',
                year: '2021',
                semester: 'Fall',
                fileSize: '1.4 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1irqAd8ck6UhDyFgAUbPwVo-gPV1MMLZb&export=download&authuser=0&confirm=t&uuid=6520cc3c-1257-460d-a6e7-e8d23cb4b5cc&at=ANTm3cxo2qYUcDwGA75aidALjFL0:1769006547467'
            },
            {
                id: 'ew-mid1-2023-fall',
                title: 'EW Mid 1 2023',
                year: '2023',
                semester: 'Fall',
                fileSize: '1.6 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1QiCk8NN3RP8ka9Kqdzx2n3kHATEyWwll&export=download&authuser=0&confirm=t&uuid=f64d6523-8b27-4bfc-a2e6-fdd3f8fef36d&at=ANTm3cxGI2dDXLKEH4MKWPAq-9t_:1769006554550'
            }
        ],
    
        final: [
            {
                id: 'ew-final-2020-fall',
                title: 'EW Final 2020',
                year: '2020',
                semester: 'Fall',
                fileSize: '1.7 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1VrnLCxU3UgunpZJu0dxnZehyMtL5cU7q&export=download&authuser=0&confirm=t&uuid=88fbf50e-9d01-4338-b0ef-a41ee5631b9f&at=ANTm3czMrZGQUC2bZYDMqhaF3IWZ:1769006561393'
            },
            {
                id: 'ew-final-2023-fall',
                title: 'EW Final 2023',
                year: '2023',
                semester: 'Fall',
                fileSize: '1.8 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1aQuW1mK6UQx49oEix0bH-AQioPW792Nz&export=download&authuser=0&confirm=t&uuid=dcd45ac5-d342-4401-8c3b-b17a7a15cc7f&at=ANTm3cx2Ix4u-43RtDY50gRWbpay:1769006566339'
            },
            {
                id: 'ew-final-2023-fall-solution',
                title: 'EW Final 2023 Solution',
                year: '2023',
                semester: 'Fall',
                fileSize: '1.3 MB',
                downloadUrl: 'https://drive.usercontent.google.com/download?id=1OP0ZhCCYTg_yYKi_cCDcPDpaBwlTK15H&export=download&authuser=0&confirm=t&uuid=2722d1c5-9f0a-4d2d-bbd5-0655fc2b78aa&at=ANTm3cyQ_ipjnlIoXR0f6SsUxW2d:1769006572425'
            }
        ]
    }
},
'probability-statistics': {
    title: 'Probability and Statistics',
    description: 'Statistical analysis, probability distributions, hypothesis testing, and data interpretation',
    icon: '📊',
    papers: {
        mid1: [{
            id: 'prob-mid1-2017',
            title: 'PROB Mid 1 2017',
            year: '2017',
            semester: 'Fall',
            fileSize: '1.3 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1p_zuS6bEEW6OHtw2mK9T0kwhJ_LMmWf6'
          },
          {
            id: 'prob-mid1-2018',
            title: 'PROB Mid 1 2018',
            year: '2018',
            semester: 'Fall',
            fileSize: '1.6 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1dSbkIeIbUvjRMm6T-Hv-6SCs5H6LgZE2'
          },
          {
            id: 'prob-mid1-2019',
            title: 'PROB Mid 1 2019',
            year: '2019',
            semester: 'Fall',
            fileSize: '1.4 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1jO2fJdhnsWNLFwGCAq_JYwWeZU7Rpp25'
          },
          {
            id: 'prob-mid1-2024',
            title: 'PROB Mid 1 2024',
            year: '2024',
            semester: 'Fall',
            fileSize: '1.8 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1y50knXl0a3_6liQI0blMlDxP4sqOXM8E'
          },
          {
            id: 'prob-mid1-2024-solution',
            title: 'PROB Mid 1 2024 Solution',
            year: '2024',
            semester: 'Fall',
            fileSize: '1.2 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1ngOgyK5q6kv16XefTHgAbvUvnL545vLz'
          },
          {
            id: 'prob-mid1-2025',
            title: 'PROB Mid 1 2025',
            year: '2025',
            semester: 'Fall',
            fileSize: '1.7 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1Hg20-pSywsaObHF61JkCxDnvxndQbzdr'
          }],
        mid2: [{
            id: 'prob-mid2-2017',
            title: 'PROB Mid 2 2017',
            year: '2017',
            semester: 'Fall',
            fileSize: '1.5 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1GO93duiVoGGpauRiJG2sg-qlbEK8uA-t'
          },
          {
            id: 'prob-mid2-2021',
            title: 'PROB Mid 2 2021',
            year: '2021',
            semester: 'Fall',
            fileSize: '1.9 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1-0SjESJ02ef6Oh6BNit-Jz-gBDVTbVd2'
          },
          {
            id: 'prob-mid2-2023',
            title: 'PROB Mid 2 2023',
            year: '2023',
            semester: 'Fall',
            fileSize: '1.4 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=10y-i_sjh5-XMgIisi4sKsTeQfST3lUrk'
          },
          {
            id: 'prob-mid2-2024',
            title: 'PROB Mid 2 2024',
            year: '2024',
            semester: 'Fall',
            fileSize: '1.6 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1aLcUqf3UVxKmwsVyKFPBLQ0QJHsA2sag'
          },
          {
            id: 'prob-mid2-2024-solution',
            title: 'PROB Mid 2 2024 Solution',
            year: '2024',
            semester: 'Fall',
            fileSize: '1.3 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=13bPbOpwDcYx-HkwsYug3mty1UqzPV3Au'
          },
          {
            id: 'prob-mid2-2025-part-a-solution',
            title: 'PROB Mid 2 2025 Part A Solution',
            year: '2025',
            semester: 'Fall',
            fileSize: '1.1 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1vuRGwr7Ma5AKpIdvuo9TUcjcI44nutpH'
          },
          {
            id: 'prob-mid2-2025-part-b-solution',
            title: 'PROB Mid 2 2025 Part B Solution',
            year: '2025',
            semester: 'Fall',
            fileSize: '1.2 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=14tas2Xb3_Z9hLEK9XVGU6o1sd5bftJ1c'
          }],
        final: [{
            id: 'prob-final-2020',
            title: 'PROB Final 2020',
            year: '2020',
            semester: 'Fall',
            fileSize: '1.9 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1KR0bQshFfancO5rWIU8Z4ys2bBFLeRTT'
          },
          {
            id: 'prob-final-2021',
            title: 'PROB Final 2021',
            year: '2021',
            semester: 'Fall',
            fileSize: '1.6 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1KHVwOySVZHvSC1pN7TnohdjNqZVGetwL'
          },
          {
            id: 'prob-final-2022',
            title: 'PROB Final 2022',
            year: '2022',
            semester: 'Fall',
            fileSize: '1.8 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1ro3NJj7fCdcTID-GUsHD0VYRBIxw5LDB'
          },
          {
            id: 'prob-final-2022-solution',
            title: 'PROB Final 2022 Solution',
            year: '2022',
            semester: 'Fall',
            fileSize: '1.4 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1VdQhZqxi4ZoFYzzOLob-cNN1AFMEfW4t'
          },
          {
            id: 'prob-final-2023',
            title: 'PROB Final 2023',
            year: '2023',
            semester: 'Fall',
            fileSize: '1.7 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1g_KbBy9tgSKLsxwTl-XQZsnyZZBsI60T'
          },
          {
            id: 'prob-final-2023-solution',
            title: 'PROB Final 2023 Solution',
            year: '2023',
            semester: 'Fall',
            fileSize: '1.5 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1tAyLLSz1ngODAifSNZyslCLD2ZNsi1_F'
          },
          {
            id: 'prob-final-2024',
            title: 'PROB Final 2024',
            year: '2024',
            semester: 'Fall',
            fileSize: '1.9 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1SSdRRR4Z4xEPcivOqrmI6YkeNON_M41R'
          },
          {
            id: 'prob-final-2025-solution',
            title: 'PROB Final 2025 Solution',
            year: '2025',
            semester: 'Fall',
            fileSize: '1.3 MB',
            downloadUrl: 'https://drive.usercontent.google.com/download?id=1EiTO9q5shQkDasU2VnMbiE-PzsML5m3p'
          }],
        quiz: []
    }
},
'artificial-intelligence': {
    title: 'Artificial Intelligence',
    description: 'Introduction to artificial intelligence concepts including search, knowledge representation, and reasoning',
    icon: '🤖',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'artificial-intelligence-lab': {
    title: 'Artificial Intelligence Lab',
    description: 'Practical lab work for artificial intelligence including implementations and experiments',
    icon: '🧪',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'software-engineering': {
    title: 'Software Engineering',
    description: 'Software development life cycle, requirements engineering, design, testing, and project management',
    icon: '🛠️',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'technical-business-writing': {
    title: 'Technical and Business Writing',
    description: 'Technical documentation, reports, and business communication skills for professionals',
    icon: '📝',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'applied-human-computer-interaction': {
    title: 'Applied Human Computer Interaction',
    description: 'Principles of human-computer interaction, usability, and user-centered design applied to real systems',
    icon: '🧑‍💻',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'data-science': {
    title: 'Data Science',
    description: 'Data analysis, visualization, and machine learning techniques for extracting insights',
    icon: '📈',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'numerical-computing': {
    title: 'Numerical Computing',
    description: 'Numerical methods and computing techniques for solving mathematical problems',
    icon: '🔢',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'computer-networks-lab': {
    title: 'Computer Networks Lab',
    description: 'Practical lab work for computer networks including simulations and configurations',
    icon: '🧪',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'parallel-distributed-computing': {
    title: 'Parallel and Distributed Computing',
    description: 'Concepts and practices of parallel and distributed computing architectures and algorithms',
    icon: '⚡',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'software-design-analysis': {
    title: 'Software Design and Analysis',
    description: 'Software design principles, analysis techniques, and design patterns for building robust software systems',
    icon: '📐',
    papers: {
        mid1: [{
  id: 'sda-mid1-2019',
  title: 'SDA Mid 1 2019',
  year: '2019',
  semester: 'Fall',
  fileSize: '1.5 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=1zSDpJeSJBuOTKjBLX-LfH7I6Rwcg3HDC'
},
{
  id: 'sda-mid1-2020',
  title: 'SDA Mid 1 2020',
  year: '2020',
  semester: 'Fall',
  fileSize: '1.7 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=1W6bfW5axeBzPW1p7j_u4UwarLNBgU92e'
},
{
  id: 'sda-mid1-2024',
  title: 'SDA Mid 1 2024',
  year: '2024',
  semester: 'Fall',
  fileSize: '1.4 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=1b7lxn0JY-3jVKIDsojZ6XV8w6u3K9lLq'
}],
        mid2: [{
  id: 'sda-mid2-2023-fall',
  title: 'SDA Mid 2 2023 Fall',
  year: '2023',
  semester: 'Fall',
  fileSize: '1.8 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=11ZVJ26n-5mJg6zvVvF1yuZyVvhiI_Ki_'
},
{
  id: 'sda-mid2-2023-spring',
  title: 'SDA Mid 2 2023 Spring',
  year: '2023',
  semester: 'Spring',
  fileSize: '1.6 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=1sIC2_qXj78QUROP2oGKSevgKI54wyVX9'
},
{
  id: 'sda-mid2-2024',
  title: 'SDA Mid 2 2024',
  year: '2024',
  semester: 'Fall',
  fileSize: '1.9 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=1CrnBs-m0-Ts4KkRBkSoLfDc_szmU6hZy'
}],
        final: [{
  id: 'sda-final-2018',
  title: 'SDA Final 2018',
  year: '2018',
  semester: 'Fall',
  fileSize: '1.3 MB',
  downloadUrl: 'https://drive.usercontent.google.com/download?id=1G-cq7Ie8rPOVdl-DrU9TpnMY0n77OqhG'
}],
        quiz: []
    }
},
'operating-system-lab': {
    title: 'Operating System Lab',
    description: 'Practical lab work for operating systems including process management, memory management, and system programming',
    icon: '🧪',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
},
'database-lab': {
    title: 'Database Lab',
    description: 'Practical lab work for database systems including SQL queries, database design, and implementation',
    icon: '🧪',
    papers: {
        mid1: [],
        mid2: [],
        final: [],
        quiz: []
    }
}

};

// Function to get current subject from URL or default
function getCurrentSubject() {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectId = urlParams.get('subject') || 'programming-fundamentals';
    return subjectPapers[subjectId] || subjectPapers['programming-fundamentals'];

}





