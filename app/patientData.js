export default {

  "diseases": [{
    "did": "1",
    "name": "Alcoholism"
  }, {
    "did": "2",
    "name": "Diabetes"
  }, {
    "did": "3",
    "name": "Lung Cancer"
  }, {
    "did": "4",
    "name": "Obesity"
  }, {
    "did": "5",
    "name": "Viral infection"
  }],
  "sources": ["lab result", "medication", "problem list"],
  "patient_data": [{
    "pid": "1",
    "diseases": {
      "1": {
        "name": "Alcoholism",
        "num_sources": 2,
        "has_disease": true,
        "sources": {
          "lab resuslt": "0",
          "medication": "2",
          "problem list": "2"
        }
      },
      "2": {
        "name": "Diabetes",
        "num_sources": 2,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "2",
          "problem list": "0"
        }
      },
      "3": {
        "name": "Lung Cancer",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "4": {
        "name": "Obesity",
        "num_sources": 1,
        "has_disease": true,
        "sources": {
          "lab resuslt": "0",
          "medication": "1",
          "problem list": "0"
        }
      },
      "5": {
        "name": "Viral infection",
        "num_sources": 3,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      }
    }
  }, {
    "pid": "2",
    "diseases": {
      "1": {
        "name": "Alcoholism",
        "num_sources": 2,
        "has_disease": true,
        "sources": {
          "lab resuslt": "0",
          "medication": "1",
          "problem list": "1"
        }
      },
      "2": {
        "name": "Diabetes",
        "num_sources": 2,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "0"
        }
      },
      "3": {
        "name": "Lung Cancer",
        "num_sources": 3,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "4": {
        "name": "Obesity",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "5": {
        "name": "Viral infection",
        "num_sources": 3,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      }
    }
  }, {
    "pid": "3",
    "diseases": {
      "1": {
        "name": "Alcoholism",
        "num_sources": 3,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "2": {
        "name": "Diabetes",
        "num_sources": 1,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "0",
          "problem list": "0"
        }
      },
      "3": {
        "name": "Lung Cancer",
        "num_sources": 0,
        "has_disease": false,
        "sources": {
          "lab resuslt": "0",
          "medication": "0",
          "problem list": "0"
        }
      },
      "4": {
        "name": "Obesity",
        "num_sources": 0,
        "has_disease": false,
        "sources": {
          "lab resuslt": "0",
          "medication": "0",
          "problem list": "0"
        }
      },
      "5": {
        "name": "Viral infection",
        "num_sources": 0,
        "has_disease": false,
        "sources": {
          "lab resuslt": "0",
          "medication": "0",
          "problem list": "0"
        }
      }
    }
  }, {
    "pid": "4",
    "diseases": {
      "1": {
        "name": "Alcoholism",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "2",
          "medication": "1",
          "problem list": "1"
        }
      },
      "2": {
        "name": "Diabetes",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "3": {
        "name": "Lung Cancer",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "2",
          "medication": "1",
          "problem list": "1"
        }
      },
      "4": {
        "name": "Obesity",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "5": {
        "name": "Viral infection",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      }
    }
  }, {
    "pid": "5",
    "diseases": {
      "1": {
        "name": "Alcoholism",
        "num_sources": 2,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "0",
          "problem list": "1"
        }
      },
      "2": {
        "name": "Diabetes",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "2",
          "problem list": "1"
        }
      },
      "3": {
        "name": "Lung Cancer",
        "num_sources": 2,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "0",
          "problem list": "1"
        }
      },
      "4": {
        "name": "Obesity",
        "num_sources": 3,
        "has_disease": true,
        "sources": {
          "lab resuslt": "1",
          "medication": "1",
          "problem list": "1"
        }
      },
      "5": {
        "name": "Viral infection",
        "num_sources": 1,
        "has_disease": false,
        "sources": {
          "lab resuslt": "1",
          "medication": "0",
          "problem list": "0"
        }
      }
    }
  }]

}
