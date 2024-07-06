import pandas as pd

if __name__ == "__main__":
    filename = "/Users/xo9/Downloads/MiFitness data/20240705_1442533652_MiFitness_hlth_center_sport_record.csv"

    df = pd.read_csv(filename)
    print(df)