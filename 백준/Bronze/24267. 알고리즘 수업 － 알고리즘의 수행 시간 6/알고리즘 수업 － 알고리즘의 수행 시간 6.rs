fn main() {
    let n = std::io::read_to_string(std::io::stdin()).unwrap();
    let n: usize = n.trim().parse().unwrap();
    println!("{}\n3", n * (n - 1) * (n - 2) / 6);
}