# Elastic search test

Up the docker compose script and access Kibana on localhost:5061

In the dev console you could paste the following commands in and run them individually to test out elastic search.

```
GET _search
{
  "query": {
    "match_all": {}
  }
}

GET /_cat/indices?v

PUT /ocrvs-test2?pretty

PUT /ocrvs-test1/_doc/s_usXmcB4doqSTtWv2Eg
{
  "childFirstNames": ["Ryan", "Graham"],
  "childFamilyName": "Crichton",
  "childDoB": "1986-06-04",
  "gender": "f"
  "motherFirstNames": ["Christine"],
  "motherFamilyNames": "Crichton",
  "motherDoB": "1956-08-13",
  "motherIdentifier": "123",
  "fatherFirstNames": ["Graham", "Thomas"],
  "fatherFamilyName": "Crichton",
  "fatherDoB": "1953-01-01",
  "fatherIdentifier": "312"
}

GET /ocrvs-million/_search

DELETE /ocrvs-test3

GET /ocrvs-million/_search
{
  "query": {
    "bool": {
      "must": [
        { "fuzzy":
          {
            "childFirstNames": "Mona"
          }
        },
        { "fuzzy":
          {
            "childFamilyName": "Dickinson"
          }
        },
        { "term":
          {
            "childDoB": "2016-06-29T16:44:08.777Z"
          }
        },
        { "term":
          {
            "gender": "f"
          }
        }
      ],
      "should": [
        { "fuzzy":
          {
            "motherFirstNames": "Shayne"
          }
        },
        { "fuzzy":
          {
            "motherFamilyName": "Cummerata"
          }
        },
        { "term":
          {
            "motherDoB": "1986-06-04"
          }
        },
        {
          "term": {
            "motherIdentifier": {
              "value": "123",
              "boost": 2
            }
          }
        },
        { "fuzzy":
          {
            "fatherFirstNames": "eve"
          }
        },
        { "fuzzy":
          {
            "fatherFirstNames": "thomas"
          }
        },
        { "fuzzy":
          {
            "fatherFamilyName": "Cummerata"
          }
        },
        { "term":
          {
            "fatherDoB": "1986-06-04"
          }
        },
        {
          "term": {
            "fatherIdentifier": {
              "value": "312",
              "boost": 2
            }
          }
        }
      ]
    }
  }
}
```