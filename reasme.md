# Crm platformasi uchun struktura

## User

```
name
email
password
phone
balance => defaul:0
block: enum: [true, false] true
image
role: [
    admin, diler, mentor, student
]

```

## Viloyat

```
name: {
    uz: {type: String, required: true},
    ru: {type: String, required: true},
    en: {type: String, required: true}
}
```


## Tuman

```
name
viloyat_ID

```     


## Learning_center

```
name
viloyat_ID (Viloyat model)
tuman_ID (Tuman model)
diler (User model)

```     

## Fan 
```
name
diler (User model)
lc_ID (Learning_center model)

```


## Mentor 
```
mentor_ID (User model)
lc_ID (Learning_center model)
fan_ID (Fan model) 

```


## Mentor's group 
```
lc_ID (Learning_center model)
fan_ID (Fan model) 
mentor_ID (Mentor model)
name 

```

## Mentor's form (sinf) 
```
mentor_ID (Mentor model)
mentor_group_ID (Mentor's group  model)
name 

```


## Mentor's theme (mavzu) 
```
mentor_ID (Mentor model)
mentor_group_ID (Mentor's group model) 
mentor_form_ID (Mentor's form model)
 

```

## Mentor's collection (test uchun kolleksiya) 
```
mentor_ID (Mentor model)
mentor_group_ID (Mentor's group model) 
mentor_form_ID (Mentor's form model)
mentor_theme_ID (Mentor's theme model)
collection_name
```


## Mentor's test (test qoshish) 
```

collection_ID (Mentor's collection model) 
question: {
        type: String,
        required: true
    },
    options: {
        a: { type: String, required: true },
        b: { type: String, required: true },
        c: { type: String, required: true },
        d: { type: String, required: true },
    },

    answer: { type: String, required: true },
    score: { type: Number, default: 0 },
    status: { type: String, default: "" },
```


## Mentor's audio (audio) 
```
mentor_ID (Mentor model)
mentor_group_ID (Mentor's group model) 
mentor_form_ID (Mentor's form model)
mentor_theme_ID (Mentor's theme model)
audio_name
audio_file
audio_time
```

